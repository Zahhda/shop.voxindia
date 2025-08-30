'use client'
import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Vercel Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 283 64"
          fill="currentColor"
        >
          <path d="M141 16l-69 120-69-120h138zm142 0l-69 120-69-120h138z" />
        </svg>

        {/* Error Box */}
        <div className="max-w-lg w-full bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl p-6">
          <h1 className="text-2xl font-bold mb-3">Application Error</h1>
          <p className="text-sm text-neutral-300">
            An unexpected error has occurred and the application cannot continue.
          </p>
          <p className="text-xs mt-4 text-neutral-500">
            Check the console or server logs for more details.
          </p>
        </div>

        {/* Footer style note like Vercel */}
        <p className="text-xs text-neutral-600">
          Powered by{" "}
          <span className="font-semibold text-white">Vercel</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
