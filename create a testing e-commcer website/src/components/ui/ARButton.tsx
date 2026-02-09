'use client';

import { useState } from 'react';
import { ARViewer } from '../ARViewer';

interface ARButtonProps {
  productId: string;
}

export default function ARButton({ productId }: ARButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleARView = async () => {
    setIsLoading(true);
    try {
      const arViewer = new ARViewer();
      await arViewer.initialize();
    } catch (error) {
      console.error('AR initialization failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleARView}
      disabled={isLoading}
      className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 disabled:opacity-50"
    >
      {isLoading ? 'Loading AR...' : 'View in AR'}
    </button>
  );
} 