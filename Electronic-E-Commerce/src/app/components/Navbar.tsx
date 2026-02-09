"use client";
import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "../searchbar";
import { getCartItemCount, CART_UPDATE_EVENT } from "@/utils/cart";
import { getWishlist, WISHLIST_UPDATE_EVENT, removeFromWishlist } from "@/utils/wishlist";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(getWishlist());
  const [showWishlist, setShowWishlist] = useState(false);

  useEffect(() => {
    // Initial cart count
    setCartItemCount(getCartItemCount());

    // Listen for cart updates
    const handleCartUpdate = () => {
      setCartItemCount(getCartItemCount());
    };

    // Listen for wishlist updates
    const handleWishlistUpdate = () => {
      setWishlistItems(getWishlist());
    };

    window.addEventListener(CART_UPDATE_EVENT, handleCartUpdate);
    window.addEventListener(WISHLIST_UPDATE_EVENT, handleWishlistUpdate);

    return () => {
      window.removeEventListener(CART_UPDATE_EVENT, handleCartUpdate);
      window.removeEventListener(WISHLIST_UPDATE_EVENT, handleWishlistUpdate);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2">
        <p className="text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <a href="/"> <h1 className="text-2xl font-bold text-black">Exclusive</h1></a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 text-black font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>

          {/* Search and Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Searchbar />
            <div className="relative">
              <button
                onClick={() => setShowWishlist(!showWishlist)}
                className="relative"
              >
                <CiHeart
                  className="text-2xl cursor-pointer"
                  aria-label="Wishlist"
                />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </button>
              {/* Wishlist Dropdown */}
              {showWishlist && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Wishlist</h3>
                    {wishlistItems.length === 0 ? (
                      <p className="text-gray-500">Your wishlist is empty</p>
                    ) : (
                      <div className="space-y-4">
                        {wishlistItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <div className="relative w-16 h-16">
                              <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-red-500">${item.price.toFixed(2)}</p>
                            </div>
                            <button
                              onClick={() => handleRemoveFromWishlist(item.id)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <AiOutlineClose />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <Link href="/cart" className="relative">
              <HiOutlineShoppingCart
                className="text-2xl cursor-pointer"
                aria-label="Shopping Cart"
              />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-black"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
              <div className="flex items-center space-x-4 mt-4">
                <div className="relative">
                  <CiHeart
                    className="text-2xl cursor-pointer"
                    aria-label="Wishlist"
                  />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistItems.length}
                    </span>
                  )}
                </div>
                <Link href="/cart" className="relative">
                  <HiOutlineShoppingCart
                    className="text-2xl cursor-pointer"
                    aria-label="Shopping Cart"
                  />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </div>
              <Searchbar />
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
