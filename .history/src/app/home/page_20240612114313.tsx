"use client";
import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar
        logoSrc="/logo.png"
        logoAlt=""
        option1="Place to stay"
        option2="Experience"
        option3="Nearby"
        option4="Contact"
        button1Label="Become a partner"
        button2Label="Sign up"
      />
      <div className="relative">
        {/* Hero section */}
        <div className="relative">
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-blue-200 opacity-60"></div>
          {/* Hero image */}
          <Hero logoSrc="/hero.png" logoAlt="Your alt text here" />
        </div>

        {/* Search section */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
