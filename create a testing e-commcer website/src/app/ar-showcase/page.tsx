import { Suspense } from 'react';
import { products } from '@/data/products';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ARShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">AR Showcase</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-neutral-800 rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <div className="aspect-square relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                  <a
                    href={`/ar/${product.id}`}
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
                  >
                    View in AR
                  </a>
                </div>
              </div>
            </Suspense>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{product.name}</h2>
              <p className="text-primary-400">${product.price.toFixed(2)}</p>
              <p className="text-gray-400 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 