import React from "react";

interface CardProps {
  imageSrc: string;
  largeText: string;
  smallText: string;
  showOverlay?: boolean; // Optional prop to show/hide overlay
  showArrow?: boolean; // Optional prop to show/hide arrow
  smallSize?: boolean; // Optional prop to decrease card size
}

const Card = ({
  imageSrc,
  largeText,
  smallText,
  showOverlay = false,
  showArrow = false,
  smallSize = false,
}: CardProps) => {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden group my-8 ${
        smallSize ? "w-250 h-64" : "w-full h-auto"
      }`}
    >
      {/* Image */}
      <div className="w-full h-full relative">
        <img src={imageSrc} alt="Card" className="w-full h-full" />
        {/* Black overlay */}
        {showOverlay && (
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        )}
      </div>

      {/* Large Text */}
      <div className="absolute bottom-0 left-0 p-4">
        <h2 className="text-xl font-semibold text-white">{largeText}</h2>
        <p className="text-sm text-white opacity-75">{smallText}</p>
      </div>

      {/* Arrow Icon */}
      {showArrow && (
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
      )}
    </div>
  );
};

export default Card;
