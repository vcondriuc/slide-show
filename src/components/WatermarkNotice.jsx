import React, { useState } from 'react';

const WatermarkNotice = ({ onRemoveWatermark, watermarkRemoved }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800">Watermark Notice</h3>
          </div>
          
          {watermarkRemoved ? (
            <div className="text-green-700 font-medium">
              ✓ Watermark removed! Thank you for your support!
            </div>
          ) : (
            <>
              <p className="text-gray-700 mb-3">
                By default, exported videos include a small watermark. Support the project to remove it!
              </p>
              
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-blue-600 hover:text-blue-700 underline mb-3"
              >
                {showDetails ? 'Hide details' : 'Learn more'}
              </button>

              {showDetails && (
                <div className="bg-white rounded-lg p-4 mb-4 text-sm text-gray-600">
                  <p className="mb-2">
                    This is a free, open-source project. The watermark helps people discover it.
                  </p>
                  <p>
                    By supporting the project, you help maintain and improve it for everyone!
                  </p>
                </div>
              )}

              <a
                href="https://www.buymeacoffee.com/slideshow"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onRemoveWatermark}
                className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.774.201 1.14.354.365.153.698.334.973.572.51.447.813 1.093.931 1.766l.661 3.748.135.772a1.955 1.955 0 01-.215 1.29c-.28.446-.729.748-1.227.872-.495.123-1.015.163-1.53.163H9.05c-.514 0-1.035-.04-1.53-.163-.498-.124-.947-.426-1.227-.872a1.955 1.955 0 01-.215-1.29l.135-.772.661-3.748c.118-.673.421-1.319.931-1.766.275-.238.608-.42.973-.572.366-.153.748-.269 1.14-.354.265-.057.531-.105.798-.145l.228-.031c.67-.077 1.343-.125 2.017-.144a25.076 25.076 0 013.426.12c.131.016.263.04.394.048h.002c.281.039.561.087.838.147h.005c.111.027.111.185 0 .212-.24.05-.481.094-.724.13-.078.011-.172.026-.258.036a22.228 22.228 0 01-1.157.107c-1.178.076-2.359.074-3.536-.006-.422-.038-.916-.072-1.382-.146-.377-.058-.71.09-.834.473-.104.321.122.78.474.834.298.046.597.086.896.119 1.213.128 2.432.168 3.65.118 1.098-.04 2.212-.132 3.287-.37.386-.082.763-.204 1.123-.366.277-.124.538-.313.692-.58.216-.376.12-.844-.177-1.146-.242-.245-.57-.385-.888-.501-.87-.316-1.835-.417-2.75-.5a25.834 25.834 0 00-3.7-.062c-1.027.055-2.077.153-3.077.416-.2.053-.399.112-.626.194-.399.154-.801.388-.996.788-.148.297-.193.662-.25.987-.067.377-.127.755-.192 1.133-.035.206-.079.429-.231.572-.15.143-.373.172-.57.241-.613.216-.882.781-1.001 1.379l-.132.666A3.892 3.892 0 003 11.498v6.5c0 1.933 1.567 3.5 3.5 3.5h11c1.933 0 3.5-1.567 3.5-3.5v-6.5a3.892 3.892 0 00-.784-2.083z"/>
                </svg>
                <span>Buy Me a Coffee</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatermarkNotice;
