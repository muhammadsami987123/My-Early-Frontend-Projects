'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-400">
          <p>Your cart is empty.</p>
          <Link href="/" className="text-primary-600 hover:underline">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center bg-neutral-800 p-4 rounded-lg">
                <div>
                  <h2 className="text-lg font-semibold text-white">{item.name}</h2>
                  <p className="text-primary-400">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <button 
              onClick={clearCart}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
            <div className="text-xl font-bold text-white">
              Total: ${total.toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 