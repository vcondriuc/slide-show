import { useState, useCallback } from 'react';

export const usePhotoManager = () => {
  const [photos, setPhotos] = useState([]);

  const addPhotos = useCallback((newPhotos) => {
    const photosWithMetadata = newPhotos.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      file,
      preview: URL.createObjectURL(file),
      duration: 3, // default 3 seconds
      transition: 'fade'
    }));
    
    setPhotos(prev => [...prev, ...photosWithMetadata]);
  }, []);

  const removePhoto = useCallback((id) => {
    setPhotos(prev => {
      const photo = prev.find(p => p.id === id);
      if (photo?.preview) {
        URL.revokeObjectURL(photo.preview);
      }
      return prev.filter(p => p.id !== id);
    });
  }, []);

  const updatePhoto = useCallback((id, updates) => {
    setPhotos(prev => prev.map(p => 
      p.id === id ? { ...p, ...updates } : p
    ));
  }, []);

  const reorderPhotos = useCallback((newOrder) => {
    setPhotos(newOrder);
  }, []);

  const clearPhotos = useCallback(() => {
    photos.forEach(photo => {
      if (photo.preview) {
        URL.revokeObjectURL(photo.preview);
      }
    });
    setPhotos([]);
  }, [photos]);

  return {
    photos,
    addPhotos,
    removePhoto,
    updatePhoto,
    reorderPhotos,
    clearPhotos
  };
};
