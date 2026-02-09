'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ARViewerProps {
  productId: string;
}

export default function ARViewer({ productId }: ARViewerProps) {
  const isSupported = useRef('xr' in navigator);

  useEffect(() => {
    const initAR = async () => {
      if (!isSupported.current) return;
      
      try {
        const session = await navigator.xr?.requestSession('immersive-ar', {
          requiredFeatures: ['hit-test'],
          optionalFeatures: ['dom-overlay'],
        });

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          xrCompatible: true
        });

        session?.updateRenderState({
          baseLayer: new XRWebGLLayer(session, renderer)
        });
      } catch (error) {
        console.error('AR initialization failed:', error);
      }
    };

    initAR();
  }, [productId]);

  return <div className="w-full h-full" />;
} 