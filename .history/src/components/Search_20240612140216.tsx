"use client";
import React from "react";

interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button className="absolute inset-y-0 right-0 flex items-center px-4 bg-blue-500 text-white rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default Search;
