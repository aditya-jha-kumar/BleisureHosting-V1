"use client";
import React from "react";

interface HeroProps {
  logoSrc: string;
  logoAlt: string;
  className?: string; // Make className optional
}

const Hero = ({ logoSrc, logoAlt, className }: HeroProps) => {
  return (
    <div className={className shadow-md overflow-hidden}>
      <div>
        <img src={logoSrc} alt={logoAlt} />
      </div>
    </div>
  );
};

export default Hero;
