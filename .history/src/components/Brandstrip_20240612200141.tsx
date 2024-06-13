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
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto flex justify-around items-center">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="transition-transform transform hover:scale-110"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandStrip;
