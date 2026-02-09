"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const categories = [
  "Smartphones & Tablets",
  "Laptops & Computers",
  "Audio & Headphones",
  "Smart Watches",
  "Gaming Consoles",
  "Cameras & Photography",
  "Smart Home Devices",
  "Accessories",
  "Deals & Offers"
];

const SidebarHero = function () {
  const [selectedCategory, setSelectedCategory] = useState(""); // Stores the selected category
  const [showCategories, setShowCategories] = useState(false); // Toggles category sidebar visibility

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  const handleCategoryClick = (categoryName: React.SetStateAction<string>) => {
    setSelectedCategory(categoryName);
  };

  const goBack = () => {
    setSelectedCategory(""); // Clear the selected category
  };

  return (
    <section className="flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 md:px-8 lg:px-16">
      {/* Toggle Button for Mobile */}
      <div className="flex items-center mb-4 md:hidden">
        <button
          onClick={toggleCategories}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-expanded={showCategories}
          aria-label="Toggle Categories"
        >
          {showCategories ? <AiOutlineClose className="text-xl" /> : <AiOutlineMenu className="text-xl" />}
          <span>{showCategories ? "Hide Categories" : "Show Categories"}</span>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-full md:w-1/4 mb-6 md:mb-0 pr-4 ${
          showCategories ? "block" : "hidden"
        } md:block`}
      >
        {/* Display Full List of Categories */}
        {!selectedCategory && (
          <div>
            <div className="flex justify-between items-center mb-4 px-4">
              <h2 className="text-xl font-bold text-gray-800">Categories</h2>
              <Link 
                href="/categories" 
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All →
              </Link>
            </div>
            <ul
              className="space-y-3 text-gray-700 px-4"
              role="menu"
              aria-label="Product Categories"
            >
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="cursor-pointer flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                  aria-label={`View products in ${category}`}
                  role="menuitem"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display Selected Category */}
        {selectedCategory && (
          <div className="text-gray-700 px-4 bg-white rounded-lg p-6 shadow-sm">
            <button
              onClick={goBack}
              className="mb-4 text-blue-600 hover:text-blue-700 flex items-center space-x-2"
            >
              <span>←</span>
              <span>Go Back</span>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedCategory}</h2>
            <p className="text-gray-600">
              You are currently viewing details for{" "}
              <span className="font-semibold text-blue-600">{selectedCategory}</span>.
            </p>
            <p className="mt-4 text-gray-600">
              Explore the best products and deals under the{" "}
              <span className="font-semibold text-blue-600">{selectedCategory}</span> category.
            </p>
          </div>
        )}
      </aside>

      {/* Hero Banner */}
      <div className="w-full md:w-3/4 relative">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center px-8 py-12 md:px-16 md:py-20">
            {/* Banner Content */}
            <div className="text-center md:text-left space-y-6 md:w-1/2">
              <h4 className="text-lg md:text-xl font-medium tracking-wide text-blue-100">
                Limited Time Offer
              </h4>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                Premium Electronics
              </h1>
              <p className="text-base md:text-lg font-light text-blue-100">
                Discover our latest collection of premium electronics. Get up to{" "}
                <span className="font-bold text-yellow-300">15% Off</span> on selected items with our exclusive
                summer sale!
              </p>
              <button className="mt-6 bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                Explore Deals
              </button>
            </div>

            {/* Banner Image */}
            <div className="mt-8 md:mt-0 md:w-1/2">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHHA0eHMpQOwbb_6ze8EOzBWKV--doASQdgQnSSpn99TWEFLjRsFiyr_HIa6Dl57fc-k&usqp=CAU"
                alt="iPhone 14"
                layout="responsive"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarHero;
