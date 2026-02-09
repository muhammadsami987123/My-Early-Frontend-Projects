"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We will send you an email with your order details and tracking information.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => router.push("/")}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
          >
            Continue Shopping
          </button>
          
          <button
            onClick={() => router.push("/orders")}
            className="w-full border border-black text-black py-3 rounded-md hover:bg-gray-50"
          >
            View Order History
          </button>
        </div>
      </div>
    </div>
  );
} 