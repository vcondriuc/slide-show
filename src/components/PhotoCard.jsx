import React from 'react';

const PhotoCard = ({ photo, onRemove, onUpdateDuration, onUpdateTransition }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative aspect-video">
        <img
          src={photo.preview}
          alt="Preview"
          className="w-full h-full object-cover"
        />
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
          aria-label="Delete photo"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-3 space-y-2">
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">
            Duration (seconds)
          </label>
          <input
            type="number"
            min="1"
            max="30"
            value={photo.duration}
            onChange={(e) => onUpdateDuration(parseInt(e.target.value) || 1)}
            className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
