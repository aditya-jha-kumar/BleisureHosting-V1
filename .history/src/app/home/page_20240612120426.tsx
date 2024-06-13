// use client
import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
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

      {/* Combined Hero and Search section */}
      <div className="relative ">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Hero image */}
        <Hero logoSrc="/hero.png" logoAlt="Your alt text here" />

        {/* Search section (top half) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-white flex justify-center items-center">
          <Search />
        </div>

        {/* Spacer to push Search (bottom half) below the fold */}
        <div className="h-1/2"></div>

        {/* Search section (bottom half) with white background */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white flex justify-center items-center">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
