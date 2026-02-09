'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Notification from './Notification';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  featured: boolean;
  modelUrl: string;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddToCart = () => {
    console.log('Adding to cart:', product); // Debug log
    addToCart(product);
    setNotification(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="space-y-6">
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
      <div>
        <h1 className="text-3xl font-bold text-white">{product.name}</h1>
        <p className="text-2xl font-semibold text-primary-400 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-800">
        <Image
          src={product.imageUrl || 'https://via.placeholder.com/800x600?text=Product+Image'}
          alt={product.name}
          className="w-full h-full object-cover"
          width={800}
          height={600}
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Product+Image';
          }}
        />
      </div>

      <p className="text-gray-300 text-lg">{product.description}</p>

      <button 
        onClick={handleAddToCart}
        className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
} 