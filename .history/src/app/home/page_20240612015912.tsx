// page.tsx
"use client";
// page.tsx
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if running on the client side before using window
    if (typeof window !== "undefined") {
      // Check for existing user preference for dark mode
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  const handleModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Save user preference to local storage or cookie
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <div>
      <button
        className={`inline-flex items-center px-3 py-1 rounded-full focus:outline-none ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
        onClick={handleModeToggle}
      >
        <span
          className={`h-3 w-3 rounded-full ${
            isDarkMode ? "bg-yellow-300" : "bg-yellow-500"
          }`}
        />
        <span className="sr-only">
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </span>
      </button>
      {/* <Navbar logoSrc="/logo.png" logoAlt="Logo" /> */}
    </div>
  );
};

export default Home;
