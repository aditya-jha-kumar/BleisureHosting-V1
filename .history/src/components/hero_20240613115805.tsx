import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [checkInPlaceholder, setCheckInPlaceholder] = useState(true);
  const [checkOutPlaceholder, setCheckOutPlaceholder] = useState(true);

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
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row flex-wrap space-x-4 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 flex-1">
            <FaMapMarkerAlt />
            <input
              type="text"
              placeholder="Location"
              className="outline-none flex-1"
            />
          </div>
          <div className="flex items-center space-x-2 flex-1">
            <FaCalendarAlt />
            <input
              type="date"
              placeholder="dd-mm-yy"
              onFocus={() => setCheckInPlaceholder(false)}
              onBlur={() => setCheckInPlaceholder(true)}
              className={`outline-none ${checkInPlaceholder ? 'placeholder-gray-500' : ''} flex-1`}
              onChange={(e) => {
                if (e.target.value === '') {
                  setCheckInPlaceholder(true);
                } else {
                  setCheckInPlaceholder(false);
                }
              }}
            />
          </div>
          <div className="flex items-center space-x-2 flex-1">
            <FaCalendarAlt />
            <input
              type="date"
              placeholder="dd-mm-yy"
              onFocus={() => setCheckOutPlaceholder(false)}
              onBlur={() => setCheckOutPlaceholder(true)}
              className={`outline-none ${checkOutPlaceholder ? 'placeholder-gray-500' : ''} flex-1`}
              onChange={(e) => {
                if (e.target.value === '') {
                  setCheckOutPlaceholder(true);
                } else {
                  setCheckOutPlaceholder(false);
                }
              }}
            />
          </div>
          <div className="flex items-center space-x-2 flex-1">
            <FaUser />
            <input
              type="number"
              placeholder="Guests"
              className="outline-none flex-1"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
