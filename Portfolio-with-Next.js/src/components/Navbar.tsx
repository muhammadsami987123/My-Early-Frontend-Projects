'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Image 
              src="/profile.png"
              alt="Profile Image"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <Link href="/" className="text-xl font-bold">
              Portfolio
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-2">
            <Link href="/About" className="nav-link">About</Link>
            <Link href="/Projects" className="nav-link">Projects</Link>
            <Link href="/Skills" className="nav-link">Skills</Link>
            <Link href="/Contact" className="nav-link">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-lg"
        >
          <div className="px-4 py-3 space-y-1">
            <Link href="/About" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/Projects" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/Skills" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link href="/Contact" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}