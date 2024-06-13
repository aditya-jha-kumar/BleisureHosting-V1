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
        className="z-10" // Set Navbar z-index
      />
      <Hero
        logoSrc="/hero.png"
        logoAlt="Your alt text here"
        className="z-0" // Set Hero z-index
      />
      <Search className="z-20" /> {/* Set Search z-index */}
    </div>
  );
}
