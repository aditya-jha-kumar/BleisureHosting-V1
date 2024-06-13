"use client";
import React from "react";

interface Logo {
  id: string;
  src: string;
  alt: string;
}

interface BrandStripProps {
  logos: Logo[];
}

const BrandStrip = ({ logos }: BrandStripProps) => {
  // Ensure logos is always an array
  const safeLogos = logos || [];

  return (
    <div className="bg-white py-4 ma">
      <div className="container flex justify-around items-center">
        {safeLogos.map((logo) => (
          <div
            key={logo.id}
            className="transition-transform transform hover:scale-110"
          >
            <img src={logo.src} alt={logo.alt} className="h-16 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandStrip;
