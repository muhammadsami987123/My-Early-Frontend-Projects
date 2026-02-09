'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${window.location.origin}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link 
          key={product.id} 
          href={`/product/${product.id}`}
          className="group bg-neutral-800 rounded-lg overflow-hidden hover:shadow-xl transition"
        >
          <div className="aspect-square relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-primary-400">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
} 