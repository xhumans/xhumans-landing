"use client";
import { useState } from 'react';

export default function DemoEmbed() {
  const [showDemo, setShowDemo] = useState(false);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {!showDemo ? (
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <button 
            onClick={() => setShowDemo(true)}
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Launch Demo
          </button>
        </div>
      ) : (
        <div className="aspect-video bg-black rounded-lg relative">
          {/* This would be replaced with your actual demo embed */}
          <div className="absolute top-0 right-0 m-4">
            <button 
              onClick={() => setShowDemo(false)}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center h-full text-white text-lg">
            Your XHumans Demo would appear here
          </div>
        </div>
      )}
    </div>
  );
}