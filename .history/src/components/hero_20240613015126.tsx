// "use client";
import React, { ReactNode } from "react";

interface HeroProps {
  logoSrc: string;
  logoAlt: string;
  className?: string; // Make className optional
  children?: ReactNode; // Define children as a prop
}

const Hero = ({ logoSrc, logoAlt, className, children }: HeroProps) => {
  return (
    <div className={`${className}`}>
      <div className="relative">
        <img src={logoSrc} alt={logoAlt} className="w-full h-auto" />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {children}
    </div>
  );
};

export default Hero;
