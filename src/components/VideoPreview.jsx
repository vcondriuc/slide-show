import React, { useEffect, useRef, useState } from 'react';

const VideoPreview = ({ photos, textOverlays, transition }) => {
  const canvasRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!photos.length || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const photo = photos[currentIndex];

    const img = new Image();
    img.onload = () => {
      // Calculate dimensions to fit the canvas while maintaining aspect ratio
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (imgAspect > canvasAspect) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgAspect;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Draw text overlays (simplified)
      textOverlays.forEach(overlay => {
        ctx.font = `${overlay.fontSize}px ${overlay.fontFamily}`;
        ctx.fillStyle = overlay.color;
        ctx.textAlign = 'center';
        ctx.fillText(
          overlay.text,
          (overlay.position.x / 100) * canvas.width,
          (overlay.position.y / 100) * canvas.height
        );
      });
    };
    img.src = photo.preview;
  }, [photos, currentIndex, textOverlays]);

  const handlePlay = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const playNext = (index) => {
        const duration = (photos[index]?.duration || 3) * 1000;
        intervalRef.current = setTimeout(() => {
          setCurrentIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex >= photos.length) {
              setIsPlaying(false);
              return 0;
            }
            playNext(nextIndex);
            return nextIndex;
          });
        }, duration);
      };
      playNext(currentIndex);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, []);

  if (!photos.length) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Preview</h3>
        <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Add photos to see preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Preview</h3>
      <div className="space-y-4">
        <canvas
          ref={canvasRef}
          width={800}
          height={450}
          className="w-full bg-black rounded-lg"
        />
        <div className="flex items-center justify-between">
          <button
            onClick={handlePlay}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
          <div className="text-sm text-gray-600">
            Photo {currentIndex + 1} of {photos.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
