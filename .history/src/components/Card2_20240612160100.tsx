// Card2.tsx
"use client";
import React from "react";

interface CardProps {
  imageSrc: string;
  largeText: string;
}

const Card2 = ({ imageSrc, largeText }: CardProps) => {
  return (
    <div className="relative w-64 h-auto bg-white border border-blue-500 rounded-lg shadow-md overflow-hidden mt- mx-4">
      {/* Background Image */}
      <div className="w-full h-40">
        <img src={imageSrc} alt="Card" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 text-center text-black">
        <h2 className="text-l font-semibold">{largeText}</h2>
      </div>
    </div>
  );
};

export default Card2;
