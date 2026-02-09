"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { addToCart, CartItem } from "@/utils/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Sample product data - In a real app, this would come from an API or database
const products = {
  "smartphones-tablets": [
    {
      id: "iphone-14",
      name: "iPhone 14 Pro",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Latest iPhone with advanced camera system and A16 chip",
      category: "Smartphones & Tablets",
      quantity: 1
    },
    {
      id: "ipad-pro",
      name: "iPad Pro 12.9",
      price: 1099.99,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Powerful iPad with M2 chip and Liquid Retina XDR display",
      category: "Smartphones & Tablets",
      quantity: 1
    }
  ],
  "laptops-computers": [
    {
      id: "macbook-pro",
      name: "MacBook Pro 16",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Professional laptop with M2 Pro chip and 16-inch display",
      category: "Laptops & Computers",
      quantity: 1
    },
    {
      id: "dell-xps",
      name: "Dell XPS 15",
      price: 1799.99,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Premium Windows laptop with 4K display",
      category: "Laptops & Computers",
      quantity: 1
    }
  ],
  // Add more categories as needed
};

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const categorySlug = params.slug;
  const categoryProducts = products[categorySlug as keyof typeof products] || [];
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleAddToCart = async (product: CartItem) => {
    try {
      setAddingToCart(product.id);
      const success = addToCart(product);
      
      if (success) {
        setNotificationMessage("Added to cart successfully!");
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      } else {
        setNotificationMessage("Failed to add to cart. Please try again.");
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      setNotificationMessage("An error occurred. Please try again.");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } finally {
      setAddingToCart(null);
    }
  };

  const categoryNames: { [key: string]: string } = {
    "smartphones-tablets": "Smartphones & Tablets",
    "laptops-computers": "Laptops & Computers",
    "audio-headphones": "Audio & Headphones",
    "smart-watches": "Smart Watches",
    "gaming-consoles": "Gaming Consoles",
    "cameras-photography": "Cameras & Photography",
    "smart-home-devices": "Smart Home Devices",
    "accessories": "Accessories",
    "deals-offers": "Deals & Offers"
  };

  const categoryName = categoryNames[categorySlug] || "Category";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
            <p className="mt-2 text-gray-600">Browse our collection of {categoryName.toLowerCase()}</p>
          </div>
          <Link
            href="/categories"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Categories
          </Link>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600 mb-8">We were working on adding products to this category.</p>
            <Link
              href="/categories"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Browse Other Categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={addingToCart === product.id}
                      className={`flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ${
                        addingToCart === product.id ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {addingToCart === product.id ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Adding...</span>
                        </>
                      ) : (
                        <>
                          <AiOutlineShoppingCart className="w-5 h-5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage; 