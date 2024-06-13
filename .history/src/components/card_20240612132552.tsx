import React from "react";

interface CardProps {
  imageSrc: string;
  largeText: string;
  smallText: string;
}

const Card = ({ imageSrc, largeText, smallText }: CardProps) => {
  return (
    <div className="w-full relative bg-white rounded-lg shadow-md overflow-hidden group">
      {/* Image */}
      <img src={imageSrc} alt="Card" className="w-full h-auto" />

      {/* Large Text */}
      <div className="absolute bottom-0 left-0 p-4">
        <h2 className="text-xl font-semibold text-white">{largeText}</h2>
        <p className="text-sm text-white opacity-75">{smallText}</p>
      </div>

      {/* Arrow Icon */}
      <div className="absolute bottom-0 right-0 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
