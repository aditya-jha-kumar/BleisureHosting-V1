"use client";
import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero";
import React from "react";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
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
      <div className="relative rounded">
        <Hero
          logoSrc="/hero.png"
          logoAlt="Your alt text here"
          className="rounded"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Use absolute positioning to place Search on Hero */}
          <Search />
        </div>
      </div>
    </div>
  );
}
