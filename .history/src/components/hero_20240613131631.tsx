import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

interface HeroProps {
  smallText: string;
  largeText: string;
  backgroundImage: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ smallText, largeText, backgroundImage, className }) => {
  return (
    <div className={`relative mx-4 my-8 ${className}`}>
      {/* Background image */}
      <div
        className="relative bg-cover bg-center rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "400px", // Adjust height as needed
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />
        
        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 text-white text-center p-6">
          <h2 className="text-lg font-bold">{smallText}</h2>
          <h1 className="text-3xl font-bold">{largeText}</h1>
        </div>
        
        {/* Filter bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-white bg-opacity-50">
          <div className="flex justify-between items-center space-x-4">
            {/* Location */}
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <input type="text" placeholder="Location" className="outline-none" />
            </div>
            {/* Check-in */}
            <div className="flex items-center space-x-2">
              <FaCalendarAlt />
              <input type="date" placeholder="Check-in" className="outline-none" />
            </div>
            {/* Check-out */}
            <div className="flex items-center space-x-2">
              <FaCalendarAlt />
              <input type="date" placeholder="Check-out" className="outline-none" />
            </div>
            {/* Guests */}
            <div className="flex items-center space-x-2">
              <FaUser />
              <input type="number" placeholder="Guests" className="outline-none" />
            </div>
            {/* Submit button */}
            <button className="bg-blue-500 text-white px-2 py-1 rounded-full">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
