// "use client";
// import { useState } from 'react';
// import { useCart } from '@/context/CartContext';
// import PaymentForm from '@/components/PaymentForm';

// export default function PaymentPage() {
//   const { total, clearCart } = useCart();
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const handlePaymentSuccess = () => {
//     setPaymentSuccess(true);
//     clearCart();
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-gray-800 mb-8">Payment Method</h1>

//       {paymentSuccess ? (
//         <div className="text-green-500 text-lg">
//           Payment successful! Thank you for your purchase.
//         </div>
//       ) : (
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Complete Your Payment</h2>
//           <PaymentForm total={total} onPaymentSuccess={handlePaymentSuccess} />
//           <div className="mt-4">
//             <h2 className="text-lg text-gray-800">Total: ${total.toFixed(2)}</h2>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// } 