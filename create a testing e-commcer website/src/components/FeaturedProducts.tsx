'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  featured: boolean;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${window.location.origin}/api/products?featured=true`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching featured products:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((product) => (
        <Link 
          key={product.id} 
          href={`/product/${product.id}`}
          className="group relative overflow-hidden rounded-xl"
        >
          <div className="aspect-[16/9] relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            <p className="text-xl text-primary-400">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
} 