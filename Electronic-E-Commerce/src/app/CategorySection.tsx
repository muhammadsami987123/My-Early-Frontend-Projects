"use client";
import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 1, name: "Phones", icon: "📱" },
  { id: 2, name: "Computers", icon: "💻" },
  { id: 3, name: "SmartWatch", icon: "⌚" },
  { id: 4, name: "Camera", icon: "📸" },
  { id: 5, name: "HeadPhones", icon: "🎧" },
  { id: 6, name: "Gaming", icon: "🎮" },
];

const CategorySection = function () {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category.name);
  };

  return (
    <div className="px-6 py-8 bg-white">
      {/* Header Section */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-red-700 w-2 h-10"></div>
        <h2 className="text-lg font-semibold text-red-500">Categories</h2>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        Browse By Category
      </h1>

      {/* Selected Category Display */}
      {selectedCategory && (
        <div className="mb-6 text-center text-lg font-medium text-gray-600">
          Selected Category: <span className="font-bold">{selectedCategory}</span>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="flex flex-col items-center justify-center border rounded-lg py-6 px-4 transition-transform hover:bg-red-600 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => handleCategoryClick(category)}
            aria-label={`View products in ${category.name}`}
          >
            <span className="text-3xl" aria-hidden="true">
              {category.icon}
            </span>
            <span className="mt-2 text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const CategorySectionWithNavigation = () => {
  return (
    <>
      <CategorySection />
      {/* Uncomment if NavigationButtons are required */}
      {/* <NavigationButtons /> */}
    </>
  );
};

export default CategorySectionWithNavigation;
