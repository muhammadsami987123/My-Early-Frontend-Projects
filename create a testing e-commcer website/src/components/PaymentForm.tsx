'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY'); // Replace with your Stripe publishable key

interface PaymentFormProps {
  total: number;
  onPaymentSuccess: () => void; // Define the type for the function
}

export default function PaymentForm({ total, onPaymentSuccess }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError('Stripe has not loaded yet.');
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment intent on your server
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: total * 100 }), // Amount in cents
    });

    const { clientSecret, error: apiError } = await response.json();

    if (apiError) {
      setError(apiError);
      setLoading(false);
      return;
    }

    // Confirm the payment
    const { error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (paymentError) {
      setError(paymentError.message);
      setLoading(false);
    } else {
      onPaymentSuccess();
    }
  };

  return (
    <form onSubmit={handlePayment} className="space-y-4">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Card Details</label>
        <CardElement className="p-2 border border-gray-300 rounded" />
      </div>
      <button 
        type="submit"
        disabled={loading || !stripe}
        className={`mt-4 w-full py-2 rounded ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white`}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
} 