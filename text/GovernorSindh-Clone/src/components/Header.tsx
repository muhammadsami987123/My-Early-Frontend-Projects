"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function nav() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return(
        <div>
        <header className="fixed top-0 z-50 w-full h-[70px] flex items-center justify-between bg-[#0889A9] shadow-md shadow-black/50 sm:px-20">
        <nav className="container mx-auto flex items-center justify-between py-5 flex-wrap">
          <div className="logo_button">
            <Link href="/">
              <Image
                src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png"
                alt="logo"
                width={80}
                height={80}
                className="absolute -bottom-12 sm:w-20 sm:h-20 w-20 h-16 z-50"
              />
            </Link>
          </div>

          <h1 className="governor-title hidden text-shadow text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <h1 className="text-shadow text-2xl font-extrabold text-[#b9d8f3] lg:hidden mb-2">
            Tuition Free Program
          </h1>

          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-wrap gap-5 text-white list-none ">
  <li className="hover:border-b-2 hover:border-white transition ease-in-out duration-200 pb-1 border-b-2 border-transparent">
    <a href="/">Home</a>
  </li>
  <li className="hover:border-b-2 hover:border-white transition ease-in-out duration-200 pb-1 border-b-2 border-transparent">
    <a href="/Apply">Apply</a>
  </li>
  <li className="hover:border-b-2 hover:border-white transition ease-in-out duration-200 pb-1 border-b-2 border-transparent">
    <a href="/Jobs">Jobs</a>
  </li>
  <li className="hover:border-b-2 hover:border-white transition ease-in-out duration-200 pb-1 border-b-2 border-transparent">
    <a href="/Results">Result</a>
  </li>
  <li className="hover:border-b-2 hover:border-white transition ease-in-out duration-200 pb-1 border-b-2 border-transparent">
    <a href="#courses">Courses</a>
  </li>
</ul>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <ul className="lg:hidden absolute top-16 left-0  bg-[#0889A9] text-white shadow-lg p-5 flex flex-col gap-5 w-fit">
              <li className="hover:border-b-2 hover:border-white transition ease-in ">
                <a href="#hero" onClick={toggleMobileMenu}>Home</a>
              </li>
              <li className="hover:border-b-2 hover:border-white transition ease-in">
                <a href="#music" onClick={toggleMobileMenu}>Apply</a>
              </li>
              <li className="hover:border-b-2 hover:border-white transition ease-in">
                <a href="#video" onClick={toggleMobileMenu}>Jobs</a>
              </li>
              <li className="hover:border-b-2 hover:border-white transition ease-in">
                <a href="#gift" onClick={toggleMobileMenu}>Result</a>
              </li>
              <li className="hover:border-b-2 hover:border-white transition ease-in">
                <a href="#courses" onClick={toggleMobileMenu}>Courses</a>
              </li>
            </ul>
          )}
        </nav>
      </header>

      </div>
    )
}