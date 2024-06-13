"use client";
import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero";
import React from "react";

export default function Home() {
  return (
    <div className="relative">
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
        <Hero logoSrc="/hero.png" logoAlt="Your alt text here" />
        <div className="absolute inset-0 flex justify-center items-center w-full z-20 top-0 start-0 border-b">
          {/* Use absolute positioning to place Search on Hero */}
          <Search />
        </div>
      </div>
    </div>
  );
}
