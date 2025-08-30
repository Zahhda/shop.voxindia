'use client'
import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full border border-red-400 bg-red-50 text-red-700 rounded-xl shadow-lg p-6 text-center font-mono">
        <h1 className="text-2xl font-bold mb-2">⚠️ Fatal Error</h1>
        <p className="text-sm">
          The website encountered an unrecoverable issue and cannot continue.
        </p>
        <p className="text-xs mt-4 text-gray-500">
          Check your console for more details.
        </p>
      </div>
    </div>
  );
};

export default Home;
