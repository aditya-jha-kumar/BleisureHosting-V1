import React from "react";

interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className="relative flex items-center mx">
      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        className="w-1/4 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
      />
      {/* Check-in */}
      <input
        type="date"
        placeholder="Check-in"
        className="w-1/4 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
      />
      {/* Check-out */}
      <input
        type="date"
        placeholder="Check-out"
        className="w-1/4 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
      />
      {/* Guests */}
      <select className="w-1/4 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mr-2">
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        {/* Add more options as needed */}
      </select>
      {/* Search Button */}
      <button className="h-12 px-4 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </div>
  );
};

export default Search;
