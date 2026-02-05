import React from 'react';

const TextOverlay = ({ textOverlays, onAddOverlay, onRemoveOverlay, onUpdateOverlay }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Text Overlays</h3>
        <button
          onClick={onAddOverlay}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          + Add Text
        </button>
      </div>

      {textOverlays.length === 0 ? (
        <p className="text-gray-500 text-sm">No text overlays added yet.</p>
      ) : (
        <div className="space-y-4">
          {textOverlays.map((overlay) => (
            <div key={overlay.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <input
                  type="text"
                  value={overlay.text}
                  onChange={(e) => onUpdateOverlay(overlay.id, { text: e.target.value })}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter text..."
                />
                <button
                  onClick={() => onRemoveOverlay(overlay.id)}
                  className="ml-2 text-red-500 hover:text-red-700 p-2"
                  aria-label="Remove text overlay"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">
                    Font Size
                  </label>
                  <input
                    type="number"
                    min="12"
                    max="120"
                    value={overlay.fontSize}
                    onChange={(e) => onUpdateOverlay(overlay.id, { fontSize: parseInt(e.target.value) })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">
                    Color
                  </label>
                  <input
                    type="color"
                    value={overlay.color}
                    onChange={(e) => onUpdateOverlay(overlay.id, { color: e.target.value })}
                    className="w-full h-8 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">
                    Start Time (s)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={overlay.startTime}
                    onChange={(e) => onUpdateOverlay(overlay.id, { startTime: parseInt(e.target.value) })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">
                    End Time (s)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={overlay.endTime}
                    onChange={(e) => onUpdateOverlay(overlay.id, { endTime: parseInt(e.target.value) })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextOverlay;
