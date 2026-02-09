"use client";
import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/utils/cart";
import { addToWishlist, removeFromWishlist, isInWishlist } from "@/utils/wishlist";

const products = [
  {
    id: "flash-1",
    image: "/product1.jpg",
    alt: "Gamepad",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 40,
    rating: 88,
    category: "Gaming",
    quantity: 1
  },
  {
    id: "flash-2",
    image: "/product2.jpg",
    alt: "Keyboard",
    name: "AK-900 Wired Keyboard",
    price: 960,
    discount: 35,
    rating: 75,
    category: "Computers",
    quantity: 1
  },
  {
    id: "flash-3",
    image: "/product3.jpg",
    alt: "Keyboard",
    name: "IPS LCD Gaming Monitor",
    price: 370,
    discount: 35,
    rating: 95,
    category: "Computers",
    quantity: 1
  },
  {
    id: "flash-4",
    image: "/product5.jpg",
    alt: "Shoes",
    name: "Pink DLS Girls Casual Sneakers",
    price: 146,
    discount: 35,
    rating: 75,
    category: "Fashion",
    quantity: 1
  },
];

const FlashSales = function () {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [wishlistStatus, setWishlistStatus] = useState<{ [key: string]: boolean }>({});

  // Initialize wishlist status for each product
  React.useEffect(() => {
    const status: { [key: string]: boolean } = {};
    products.forEach(product => {
      status[product.id] = isInWishlist(product.id);
    });
    setWishlistStatus(status);
  }, []);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = async (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    setAddingToCart(product.id);
    try {
      const success = addToCart(product);
      if (success) {
        setNotificationMessage("Added to cart successfully!");
      } else {
        setNotificationMessage("Failed to add to cart");
      }
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch {
      setNotificationMessage("Error adding to cart");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } finally {
      setAddingToCart(null);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isInList = wishlistStatus[product.id];
    if (isInList) {
      removeFromWishlist(product.id);
      setWishlistStatus(prev => ({ ...prev, [product.id]: false }));
      setNotificationMessage("Removed from wishlist");
    } else {
      addToWishlist(product);
      setWishlistStatus(prev => ({ ...prev, [product.id]: true }));
      setNotificationMessage("Added to wishlist");
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <section className="bg-white py-10 px-6 lg:px-32">
      {/* Header Section */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="bg-red-700 w-2 h-8"></div>
        <span className="text-2xl font-bold text-red-700">Todays</span>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Flash Sales</h2>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center gap-6 text-lg font-semibold mt-6">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={index} className="text-center">
              <span className="block text-3xl font-bold">
                {value.toString().padStart(2, "0")}
              </span>
              <span className="block text-sm font-medium">{unit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="border rounded-lg p-4 shadow-sm group relative flex flex-col h-full"
          >
            <div className="relative flex-shrink-0">
              {/* Product Image */}
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Wishlist and View Icons */}
              <div className="absolute top-2 right-2 flex flex-col gap-2 z-20">
                <button
                  onClick={(e) => handleWishlistToggle(e, product)}
                  className="focus:outline-none"
                >
                  <CiHeart
                    className={`text-3xl cursor-pointer bg-white p-1 rounded-full shadow-md ${
                      wishlistStatus[product.id] ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                    aria-label="Add to wishlist"
                  />
                </button>
                <IoEyeOutline
                  className="text-3xl cursor-pointer bg-white p-1 rounded-full shadow-md text-gray-500 hover:text-blue-500"
                  aria-label="View product details"
                />
              </div>

              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-20">
                  -{product.discount}%
                </span>
              )}

              {/* Hover Overlay with Add to Cart Button */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  disabled={addingToCart === product.id}
                  className={`w-full bg-black text-white px-4 py-2 rounded-sm hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200`}
                >
                  {addingToCart === product.id ? "Adding..." : "Add to Cart"}
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-4 flex flex-col flex-grow">
              <h3 className="font-bold text-lg line-clamp-2 min-h-[3rem]">{product.name}</h3>
              <div className="mt-2">
                <div className="text-red-500 font-bold text-xl">${product.price.toFixed(2)}</div>
                {product.discount && (
                  <div className="line-through text-gray-500 text-sm">
                    ${(product.price + (product.price * product.discount) / 100).toFixed(2)}
                  </div>
                )}
              </div>
              <div className="mt-2 flex items-center">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">{product.category}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-10">
        <Link href="/all-products">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-red-600">
            View All Products
          </button>
        </Link>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-6 py-3 rounded-md shadow-lg animate-fade-in">
          {notificationMessage}
        </div>
      )}
    </section>
  );
};

export default FlashSales;
