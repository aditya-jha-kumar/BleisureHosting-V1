"use client";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from 'react';

const DarkLightModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      // Check for existing user preference for dark mode
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }, []);

export default function Home() {
  return (
    <div>
      <Navbar logoSrc="/logo.png" logoAlt="Logo" />
    </div>
  );
}
