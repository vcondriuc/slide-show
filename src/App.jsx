import React, { useState } from 'react';
import Header from './components/Header';
import PhotoUploader from './components/PhotoUploader';
import PhotoGrid from './components/PhotoGrid';
import TransitionPicker from './components/TransitionPicker';
import TextOverlay from './components/TextOverlay';
import WatermarkNotice from './components/WatermarkNotice';
import VideoPreview from './components/VideoPreview';
import ExportButton from './components/ExportButton';
import { usePhotoManager } from './hooks/usePhotoManager';
import { useTextOverlay } from './hooks/useTextOverlay';
import './index.css';

function App() {
  const {
    photos,
    addPhotos,
    removePhoto,
    updatePhoto,
    reorderPhotos,
  } = usePhotoManager();

  const {
    textOverlays,
    addTextOverlay,
    removeTextOverlay,
    updateTextOverlay,
  } = useTextOverlay();

  const [selectedTransition, setSelectedTransition] = useState('fade');
  const [watermarkRemoved, setWatermarkRemoved] = useState(false);

  const handleRemoveWatermark = () => {
    // In a real implementation, this would verify payment
    // For demo purposes, we'll just toggle it
    setWatermarkRemoved(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Photo Upload Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Upload Photos</h2>
            <PhotoUploader onPhotosAdded={addPhotos} />
          </section>

          {/* Photo Grid Section */}
          {photos.length > 0 && (
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">2. Manage Photos</h2>
                <p className="text-sm text-gray-600">
                  Drag to reorder • {photos.length} photo(s)
                </p>
              </div>
              <PhotoGrid
                photos={photos}
                onRemove={removePhoto}
                onUpdate={updatePhoto}
                onReorder={reorderPhotos}
              />
            </section>
          )}

          {/* Configuration Section */}
          {photos.length > 0 && (
            <section className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Transitions</h2>
                  <TransitionPicker
                    selectedTransition={selectedTransition}
                    onTransitionChange={setSelectedTransition}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Text Overlays</h2>
                  <TextOverlay
                    textOverlays={textOverlays}
                    onAddOverlay={addTextOverlay}
                    onRemoveOverlay={removeTextOverlay}
                    onUpdateOverlay={updateTextOverlay}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Preview</h2>
                  <VideoPreview
                    photos={photos}
                    textOverlays={textOverlays}
                    transition={selectedTransition}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Watermark</h2>
                  <WatermarkNotice
                    onRemoveWatermark={handleRemoveWatermark}
                    watermarkRemoved={watermarkRemoved}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Export</h2>
                  <ExportButton
                    photos={photos}
                    textOverlays={textOverlays}
                    transition={selectedTransition}
                    includeWatermark={!watermarkRemoved}
                  />
                </div>
              </div>
            </section>
          )}

          {/* Empty State */}
          {photos.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Photos Yet</h3>
              <p className="text-gray-500">Upload your first photos to get started!</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">
            Made with ❤️ • Open Source • 
            <a 
              href="https://github.com/vcondriuc/slide-show" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 ml-1"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
