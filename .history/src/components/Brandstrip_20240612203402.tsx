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
    <div className="bg-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        {safeLogos.map((logo) => (
          <div
            key={logo.id}
            className="transition-transform transform hover:scale-110 mx-4" // Add horizontal margin
          >
            <img src={logo.src} alt={logo.alt} className="h-16 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandStrip;
