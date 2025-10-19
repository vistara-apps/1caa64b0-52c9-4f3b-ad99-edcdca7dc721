'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold text-fg mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-fg/70 mb-6">
          We encountered an error while loading PawConnect. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
