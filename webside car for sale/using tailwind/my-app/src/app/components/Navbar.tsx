"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10">
      <h1 className="text-2xl font-bold">SellMyRide</h1>

      {/* PC Navbar */}
      <nav className="hidden md:flex gap-10 text-white font-bold">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/cars" onClick={closeMenu}>Cars</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <FaShoppingCart className="text-white text-xl" />
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <TfiLayoutMenuV
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full bg-blue-500 p-5 md:hidden z-20`}
      >
        <div className="flex justify-end">
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <nav className="flex flex-col gap-5 mt-5 text-white font-bold">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/cars" onClick={closeMenu}>Cars</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <FaShoppingCart className="text-white text-xl" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
