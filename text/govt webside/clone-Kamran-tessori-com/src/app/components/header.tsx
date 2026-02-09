"use client";
import Image from "next/image";
import image from "../images/logo.png";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-[#044e83] fixed top-0 left-0 flex z-50 justify-around items-center w-[100%] p-4 md:p-0">
      {/* logo */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          width={70}
          height={70}
          alt="logo"
          className="relative mt -20"
          
        />
      </div>
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-slate-300 font-sans font-bold text-lg md:text-2xl">
          Tuition Free Education Program
        </h3>
      </div>
      {/* Toggle Button */}
      <button
        className="text-white block md:hidden"
        onClick={toggle}
      >
        ☰
      </button>
      {/* Navbar */}
      <nav
        className={`${
          open ? "block" : "hidden"
        } md:flex w-full md:w-auto bg-[#044e83] md:bg-transparent absolute md:static top-[100%] left-0 md:top-auto z-40 transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-0 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/apply">Apply</Link>
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
          <li>
            <Link href="/result">Result</Link>
          </li>
          <li>
            <Link href="http://localhost:3000/#courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
