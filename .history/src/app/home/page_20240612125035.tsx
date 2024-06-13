import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero";
import React from "react";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      {/* Navbar */}
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
      
      {/* Main content */}
      <div className="relative rounded overflow-hidden">
        {/* Hero section */}
        <Hero
          logoSrc="/hero.png"
          logoAlt="Your alt text here"
          className="rounded"
        />
        
        {/* Search component placed on Hero */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Search />
        </div>
      </div>
      
      {/* Additional content */}
      <div>
        <h1 className="text-3xl font-bold mt-8">Welcome to the future</h1>
        p
      </div>
    </div>
  );
}
