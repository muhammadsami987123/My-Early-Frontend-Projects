import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="flex justify-center items-center px-4 py-2">
      <div className="relative w-full max-w-md">
        {/* Search Icon */}
        <AiOutlineSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 pl-10 pr-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
