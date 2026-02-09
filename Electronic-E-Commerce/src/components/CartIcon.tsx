"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCartItemCount } from "@/utils/cart";

const CartIcon = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      setItemCount(getCartItemCount());
    };

    // Initial count
    updateCartCount();

    // Listen for storage changes
    window.addEventListener("storage", updateCartCount);

    // Cleanup
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <Link href="/cart" className="relative">
      <div className="relative p-2">
        <AiOutlineShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon; 