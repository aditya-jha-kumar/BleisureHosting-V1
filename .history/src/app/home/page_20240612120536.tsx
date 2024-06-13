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
      <div className="relative overflow-hidden">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Hero image */}
        <Hero logoSrc="/hero.png" logoAlt="Your alt text here" />

        {/* Search section (entire height) */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
