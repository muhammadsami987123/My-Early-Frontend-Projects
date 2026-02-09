import { Suspense } from 'react';
import ProductGrid from '@/components/ProductGrid';
import Hero3D from '@/components/Hero3D';
import FeaturedProducts from '@/components/FeaturedProducts';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero3D />
      </Suspense>
      
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">
          Discover Our Collection
        </h1>
        
        <Suspense fallback={<LoadingSpinner />}>
          <FeaturedProducts />
        </Suspense>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">
          All Products
        </h2>
        
        <Suspense fallback={<LoadingSpinner />}>
          <ProductGrid />
        </Suspense>
      </section>
    </main>
  );
}
