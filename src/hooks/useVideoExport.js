import { useState, useCallback, useRef } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

export const useVideoExport = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const ffmpegRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadFFmpeg = useCallback(async () => {
    if (isLoaded) return true;
    
    try {
      const ffmpeg = new FFmpeg();
      
      ffmpeg.on('log', ({ message }) => {
        console.log(message);
      });
      
      ffmpeg.on('progress', ({ progress: prog }) => {
        setProgress(Math.round(prog * 100));
      });

      // Load FFmpeg from CDN
      // Note: In production, consider self-hosting these files or using a CDN with SLA
      // See: https://github.com/ffmpegwasm/ffmpeg.wasm/blob/main/docs/api.md
      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/unithread';
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });

      ffmpegRef.current = ffmpeg;
      setIsLoaded(true);
      return true;
    } catch (err) {
      console.error('Failed to load FFmpeg:', err);
      setError('Failed to load video processing library');
      return false;
    }
  }, [isLoaded]);

  const exportVideo = useCallback(async (photos, options = {}) => {
    setIsExporting(true);
    setProgress(0);
    setError(null);

    try {
      const loaded = await loadFFmpeg();
      if (!loaded) {
        throw new Error('FFmpeg not loaded');
      }

      const ffmpeg = ffmpegRef.current;
      const {
        includeWatermark = true,
        watermarkPath = null,
        textOverlays = [],
        globalTransition = 'fade'
      } = options;

      // Write input images to FFmpeg filesystem
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        await ffmpeg.writeFile(
          `image${i}.jpg`,
          await fetchFile(photo.preview)
        );
      }

      // Create a simple concat demuxer file
      let concatContent = '';
      for (let i = 0; i < photos.length; i++) {
        const duration = photos[i].duration || 3;
        concatContent += `file 'image${i}.jpg'\n`;
        concatContent += `duration ${duration}\n`;
      }
      // Add last image again for proper duration
      concatContent += `file 'image${photos.length - 1}.jpg'\n`;

      await ffmpeg.writeFile('concat.txt', new TextEncoder().encode(concatContent));

      // Run FFmpeg command
      // Note: This is a basic implementation. Advanced features like custom transitions,
      // text overlays, and watermarks would require more complex filter graphs.
      const outputFile = 'output.mp4';
      await ffmpeg.exec([
        '-f', 'concat',
        '-safe', '0',
        '-i', 'concat.txt',
        '-vf', 'scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-r', '30',
        outputFile
      ]);

      // Read the output file
      const data = await ffmpeg.readFile(outputFile);
      const blob = new Blob([data.buffer], { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);

      // Trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'slideshow.mp4';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setProgress(100);
      setIsExporting(false);
      
      return { success: true };
    } catch (err) {
      console.error('Export error:', err);
      setError(err.message || 'Failed to export video');
      setIsExporting(false);
      return { success: false, error: err.message };
    }
  }, [loadFFmpeg]);

  return {
    exportVideo,
    isExporting,
    progress,
    error,
    isLoaded,
    loadFFmpeg
  };
};
