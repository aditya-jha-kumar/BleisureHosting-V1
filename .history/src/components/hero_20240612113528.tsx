"use client";
import React from "react";
import { useState } from "react";

export default function hero() {
  interface heroProps {
    logoSrc: string;
    logoAlt: string;
  }
  const hero = (
    {}
  )
  return (
    <div>
      <div>
        <img src={logoSrc} alt={logoAlt} />
      </div>
    </div>
  );
}
