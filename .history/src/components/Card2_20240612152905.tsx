import React from "react";

interface CardProps {
  imageSrc: string;
  largeText: string;
  smallText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, largeText, smallText }) => {
  return (
    <div className="w-full h-auto relative bg-cover bg-center rounded-lg shadow-md border border-blue-500">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full object-cover" // Use object-cover for better image scaling
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Content */}
      <div className="text-black absolute bottom-0 left-0 right-0 p-4">
        <h2 className="text-xl font-semibold">{largeText}</h2>
        <p className="text-sm opacity-75">{smallText}</p>
      </div>
    </div>
  );
};

export default Card;
