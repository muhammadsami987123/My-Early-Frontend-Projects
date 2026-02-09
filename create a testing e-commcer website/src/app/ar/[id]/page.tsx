'use client';

import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import ARViewer from '@/components/ARViewer';
import ErrorMessage from '@/components/ui/ErrorMessage';

interface ARViewPageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default function ARViewPage({ params }: ARViewPageProps) {
  const { id } = use(params);
  const [isSupported, setIsSupported] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        // Check AR support
        const supported = 'xr' in navigator && await navigator.xr?.isSessionSupported('immersive-ar');
        setIsSupported(!!supported);

        // Fetch product data
        const productData = await getProduct(id);
        if (!productData) {
          notFound();
        }
        setProduct(productData);
      } catch (err) {
        setIsSupported(false);
        setError(err instanceof Error ? err.message : 'AR is not supported on this device');
      }
    };

    init();
  }, [id]);

  if (error) {
    return <ErrorMessage title="AR Error" message={error} />;
  }

  if (!isSupported) {
    return (
      <ErrorMessage 
        title="AR Not Supported"
        message="Your device or browser doesn't support AR viewing."
      />
    );
  }

  if (!product) {
    return <ErrorMessage title="Loading" message="Loading product data..." />;
  }

  return (
    <div className="h-screen w-screen">
      <ARViewer productId={id} />
    </div>
  );
} 