import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const PhotoUploader = ({ onPhotosAdded }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onPhotosAdded(acceptedFiles);
  }, [onPhotosAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    multiple: true
  });

  return (
    <div
      {...getRootProps()}
      className={`
        border-4 border-dashed rounded-lg p-12 text-center cursor-pointer
        transition-all duration-200 ease-in-out
        ${isDragActive 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-gray-50'
        }
      `}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-4">
        <svg
          className={`w-16 h-16 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <div>
          <p className="text-xl font-semibold text-gray-700">
            {isDragActive ? 'Drop photos here' : 'Drag & drop photos here'}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            or click to select files
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Supports: JPEG, JPG, PNG, WEBP
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploader;
