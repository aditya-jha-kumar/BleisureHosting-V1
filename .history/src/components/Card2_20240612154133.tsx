// Card2.tsx
"use client";
import React from "react";

interface CardProps {
  imageSrc: string;
  largeText: string;
  smallText: string;
}

const Card2 = ({ imageSrc, largeText, smallText }: CardProps) => {
  return (
    <div className="relative w-50 h-auto bg-white border border-blue-500 rounded-lg shadow-md my-8">
      {/* Background Image */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Content */}
      <div className="p-4 text-center text-black">
        <h2 className="text-xl font-semibold">{largeText}</h2>
        <p className="text-sm opacity-75">{smallText}</p>
      </div>
    </div>
  );
};

export default Card2;
