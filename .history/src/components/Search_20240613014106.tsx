import React from "react";

interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className="relative flex flex-wrap items-center">
      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        className="w-full md:w-1/4 h-12 px-4 py-2 mb-2 md:mb-0 md:mr-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      {/* Check-in */}
      <input
        type="date"
        placeholder="Check-in"
        className="w-full md:w-1/4 h-12 px-4 py-2 mb-2 md:mb-0 md:mr-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      {/* Check-out */}
      <input
        type="date"
        placeholder="Check-out"
        className="w-full md:w-1/4 h-12 px-4 py-2 mb-2 md:mb-0 md:mr-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      {/* Guests */}
      <select className="w-full md:w-1/4 h-12 px-4 py-2 mb-2 md:mb-0 md:mr-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        {/* Add more options as needed */}
      </select>
      {/* Search Button */}
      <button className="w-full md:w-auto h-12 px-4 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </div>
  );
};

export default Search;
