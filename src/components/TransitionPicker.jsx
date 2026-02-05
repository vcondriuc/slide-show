import React from 'react';
import { transitions } from '../utils/transitions';

const TransitionPicker = ({ selectedTransition, onTransitionChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Transition Effect</h3>
      <div className="space-y-2">
        {transitions.map((transition) => (
          <label
            key={transition.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <input
              type="radio"
              name="transition"
              value={transition.id}
              checked={selectedTransition === transition.id}
              onChange={() => onTransitionChange(transition.id)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <div>
              <div className="font-medium text-gray-800">{transition.name}</div>
              <div className="text-sm text-gray-500">{transition.description}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TransitionPicker;
