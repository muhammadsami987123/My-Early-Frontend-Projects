import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import ProductViewer3D from '@/components/ProductViewer3D';
import ProductDetails from '@/components/ProductDetails';
import ARButton from '@/components/ui/ARButton';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function getProduct(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      console.error('Failed to fetch product:', res.status, res.statusText);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);
  console.log('Fetched Product:', product);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-[600px] neumorphic">
          <Suspense fallback={<LoadingSpinner />}>
            <ProductViewer3D modelUrl={product.modelUrl} />
          </Suspense>
          
          <div className="mt-4 flex justify-center">
            <ARButton productId={product.id} />
          </div>
        </div>

        <ProductDetails product={product} />
      </div>
    </div>
  );
} 