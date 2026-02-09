'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ShoppingCart, Menu, X, Sun, Moon, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { items } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme toggle until mounted
  const renderThemeToggle = () => {
    if (!mounted) return null;
    
    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 text-gray-300 hover:text-white rounded-full"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    );
  };

  return (
    <nav className="fixed w-full z-40 bg-neutral-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-primary-400"
          >
            3D Store
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-300 hover:text-white">
              Products
            </Link>
            <Link href="/categories" className="text-gray-300 hover:text-white">
              Categories
            </Link>
            <Link href="/ar-showcase" className="text-gray-300 hover:text-white">
              AR Showcase
            </Link>
            <Link href="/checkout" className="text-gray-300 hover:text-white">
              Checkout
            </Link>
            <Link href="/payment" className="text-gray-300 hover:text-white">
              Payment
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              className="p-2 text-gray-300 hover:text-white rounded-full"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {renderThemeToggle()}

            {/* Cart */}
            <Link 
              href="/cart"
              className="p-2 text-gray-300 hover:text-white rounded-full"
            >
              <ShoppingCart size={20} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white rounded-full"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/products" 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/ar-showcase" 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                AR Showcase
              </Link>
              <Link 
                href="/checkout" 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Checkout
              </Link>
              <Link 
                href="/payment" 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Payment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 