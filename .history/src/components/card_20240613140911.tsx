import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing FiArrowRight from react-icons/fi

interface CardProps {
  imageSrc: string;
  largeText: string;
  smallText: string;
  showOverlay?: boolean;
  showArrow?: boolean;
  smallSize?: boolean;
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
    <div className={`relative rounded-lg shadow-md overflow-hidden my-8 ${smallSize ? "w-250 h-64" : "w-full h-auto"}`}>
      {/* Image */}
      <div className="w-full h-full relative">
        <img src={imageSrc} alt="Card" className="w-full h-full" />
        {/* Black overlay */}
        {showOverlay && (
          <div className="absolute inset-0 bg-black opacity-35 rounded-lg"></div>
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
          <button><FiArrowRight className="h-6 w-6 text-white" /></button>          
          
        </div>
      )}
    </div>
  );
};

export default Card;
