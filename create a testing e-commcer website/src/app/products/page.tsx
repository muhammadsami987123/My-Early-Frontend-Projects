import { Suspense } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">All Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link 
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-neutral-800 rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <div className="aspect-square relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Suspense>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{product.name}</h2>
              <p className="text-primary-400">${product.price.toFixed(2)}</p>
              <p className="text-gray-400 mt-2">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 