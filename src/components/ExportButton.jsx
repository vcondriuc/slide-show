import React, { useEffect } from 'react';
import { useVideoExport } from '../hooks/useVideoExport';

const ExportButton = ({ photos, textOverlays, transition, includeWatermark }) => {
  const { exportVideo, isExporting, progress, error, loadFFmpeg } = useVideoExport();

  useEffect(() => {
    // Pre-load FFmpeg on component mount
    loadFFmpeg();
  }, [loadFFmpeg]);

  const handleExport = async () => {
    if (photos.length === 0) {
      alert('Please add some photos before exporting');
      return;
    }

    await exportVideo(photos, {
      includeWatermark,
      textOverlays,
      globalTransition: transition
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Export Video</h3>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        onClick={handleExport}
        disabled={isExporting || photos.length === 0}
        className={`
          w-full py-3 rounded-lg font-semibold text-white transition-all
          ${isExporting || photos.length === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 hover:shadow-lg'
          }
        `}
      >
        {isExporting ? (
          <span>Exporting... {progress}%</span>
        ) : (
          <span>🎬 Export to Video</span>
        )}
      </button>

      {isExporting && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 text-center mt-2">
            Processing... This may take a few minutes
          </p>
        </div>
      )}

      {!isExporting && photos.length > 0 && (
        <p className="text-xs text-gray-500 mt-3 text-center">
          Total duration: ~{photos.reduce((sum, p) => sum + (p.duration || 3), 0)} seconds
        </p>
      )}
    </div>
  );
};

export default ExportButton;
