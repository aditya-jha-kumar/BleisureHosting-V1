"use client";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from 'react';

useEffect(() => {
    // Check for existing user preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const handleModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Save user preference to local storage or cookie
    localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));
  };

export default function Home() {
  return (
    <div>
      <Navbar logoSrc="/logo.png" logoAlt="Logo" />
    </div>
  );
}
