"use client";
import React from "react";

interface HeroProps {
  logoSrc: string;
  logoAlt: string;
}

const Hero = ({ logoSrc, logoAlt }: HeroProps) => {
  return (
    <div>
      <div>
        <img src={logoSrc} alt={logoAlt} />
      </div>
    </div>
  );
}

export default Hero;
