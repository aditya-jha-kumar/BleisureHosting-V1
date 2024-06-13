// Card.tsx
import React from "react";

interface CardProps {
  imageSrc: string;
  largeText: string;
  smallText: string;
}

const Card2 = ({ imageSrc, largeText, smallText }: CardProps) => {
  return (
    <div className="text-black w-full h-auto relative bg-cover bg-center rounded-lg shadow-md overflow-au border border-blue-500">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h2 className="text-xl font-semibold">{largeText}</h2>
        <p className="text-sm opacity-75">{smallText}</p>
      </div>
    </div>
  );
};

export default Card2;
