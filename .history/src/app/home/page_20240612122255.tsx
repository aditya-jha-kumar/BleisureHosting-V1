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
      {/* <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <Hero logoSrc="/hero.png" logoAlt="Your alt text here" />
        </div>
        <div className="absolute inset-0 flex justify-center ">
          <div className=" bg-white">
            <Search />
          </div>
        </div>
      </div> */}
      <div>
        
        <Hero logoSrc="/hero.png" logoAlt="Your alt text here" />
        <Search />
      </div>
    </div>
  );
}
