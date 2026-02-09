"use client";
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white text-black font-semibold px-6 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <Image src="/logo.jpg" alt="logo" width={120} height={50} />

        {/* Mobile Menu Button (Hamburger Icon ☰) */}
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={() => setShowSidebar(true)}
        >
          ☰
        </button>

        {/* Full Navbar for Larger Screens */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#why-us" className="hover:font-extrabold">WHY US</a></li>
            <li><a href="#about" className="hover:font-extrabold">ABOUT</a></li>
            <li><a href="#services" className="hover:font-extrabold">SERVICES</a></li>
            <li><a href="#portfolio" className="hover:font-extrabold">PORTFOLIO</a></li>
            <li><a href="#process" className="hover:font-extrabold">PROCESS</a></li>
            <li><a href="#reviews" className="hover:font-extrabold">REVIEWS</a></li>
            <li><a href="#our-skills" className="hover:font-extrabold">OUR SKILLS</a></li>
            <li><a href="#contact-us" className="hover:font-extrabold">CONTACT US</a></li>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={() => setShowSidebar(false)}
        >
          ×
        </button>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-4 mt-10 px-6">
          <ul className="space-y-4">
            <li><a href="#why-us" className="text-black hover:font-extrabold">WHY US</a></li>
            <li><a href="#about" className="text-black hover:font-extrabold">ABOUT</a></li>
            <li><a href="#services" className="text-black hover:font-extrabold">SERVICES</a></li>
            <li><a href="#portfolio" className="text-black hover:font-extrabold">PORTFOLIO</a></li>
            <li><a href="#process" className="text-black hover:font-extrabold">PROCESS</a></li>
            <li><a href="#reviews" className="text-black hover:font-extrabold">REVIEWS</a></li>
            <li><a href="#our-skills" className="text-black hover:font-extrabold">OUR SKILLS</a></li>
            <li><a href="#contact-us" className="text-black hover:font-extrabold">CONTACT US</a></li>
          </ul>
        </nav>
      </div>

      {/* Overlay (optional, dims the background when sidebar is open) */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowSidebar(false)} // Close sidebar when clicking outside
        ></div>
      )}
    </>
  );
};

export default Header;
