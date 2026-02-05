import { useState, useCallback } from 'react';

export const useTextOverlay = () => {
  const [textOverlays, setTextOverlays] = useState([]);

  const addTextOverlay = useCallback(() => {
    const newOverlay = {
      id: `text-${Date.now()}`,
      text: 'Add your text here',
      fontSize: 48,
      color: '#ffffff',
      position: { x: 50, y: 50 }, // percentage
      startTime: 0,
      endTime: 5,
      fontFamily: 'Arial'
    };
    setTextOverlays(prev => [...prev, newOverlay]);
  }, []);

  const removeTextOverlay = useCallback((id) => {
    setTextOverlays(prev => prev.filter(t => t.id !== id));
  }, []);

  const updateTextOverlay = useCallback((id, updates) => {
    setTextOverlays(prev => prev.map(t => 
      t.id === id ? { ...t, ...updates } : t
    ));
  }, []);

  const clearTextOverlays = useCallback(() => {
    setTextOverlays([]);
  }, []);

  return {
    textOverlays,
    addTextOverlay,
    removeTextOverlay,
    updateTextOverlay,
    clearTextOverlays
  };
};
