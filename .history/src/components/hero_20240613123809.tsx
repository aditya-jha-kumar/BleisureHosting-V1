import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";

interface HeroProps {
  smallText: string;
  largeText: string;
  backgroundImage: string;
  className?: string; // Adding className prop
}

const Hero = ({
  smallText,
  largeText,
  backgroundImage,
  className,
}: HeroProps) => {
  return (
    <div className={`abso w-full h-96 ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-sm">{smallText}</div>
        <div className="text-3xl font-bold">{largeText}</div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-3xl">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row sm:space-y-0 space-y-4 sm:space-x-4">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <FaMapMarkerAlt />
            <input
              type="text"
              placeholder="Location"
              className="outline-none w-full sm:w-40"
            />
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <FaCalendarAlt />
            <input
              type="date"
              placeholder="Check-in"
              className="outline-none w-full sm:w-40"
            />
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <FaCalendarAlt />
            <input
              type="date"
              placeholder="Check-out"
              className="outline-none w-full sm:w-40"
            />
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <FaUser />
            <input
              type="number"
              placeholder="Guests"
              className="outline-none w-full sm:w-20"
            />
            <button className="bg-blue-500 text-white px-2 py-2 rounded-full">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
