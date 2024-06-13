// "use client";
import React from "react";

interface HeroProps {
  logoSrc: string;
  logoAlt: string;
  className?: string; // Make className optional
}

const Hero = ({ logoSrc, logoAlt, className }: HeroProps) => {
  return (
    <div className={`${className} relative`}>
      <div className="relative">
        <img src={logoSrc} alt={logoAlt} className="w-full h-auto" />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;
