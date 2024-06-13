"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-96">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero.png)" }}
      />
      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <div className="text-sm">Small Text</div>
        <div className="text-3xl font-bold">Large Text</div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-3xl">
        <div className="bg-white p-4 rounded-lg shadow-lg flex space-x-4">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <input
              type="text"
              placeholder="Location"
              className="outline w-50"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt />
            <input
              type="date"
              placeholder="Check-in"
              className="outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt />
            <input
              type="date"
              placeholder="Check-out"
              className="outline-none"
            />
          </div>
          <div className="flex items-center">
            <FaUser />
            <input
              type="number"
              placeholder="Guests"
              className="outline-none "
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
