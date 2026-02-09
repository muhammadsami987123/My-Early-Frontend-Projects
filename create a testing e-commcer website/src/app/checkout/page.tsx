'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    // Simulate payment processing
    // In a real application, you would integrate with a payment gateway here
    setPaymentSuccess(true);
    clearCart();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>

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
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <div className="text-xl font-bold text-white">
              Total: ${total.toFixed(2)}
            </div>
          </div>
          <Link href="/payment">
            <button 
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </Link>
          {paymentSuccess && (
            <div className="mt-4 text-green-500">
              Payment successful! Thank you for your purchase.
            </div>
          )}
        </div>
      )}
    </div>
  );
} 