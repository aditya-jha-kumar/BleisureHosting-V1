"use client";
import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero"; // Corrected import statement
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
      <div>

      </div>
      <Search /> {/* This will render Search component below the Navbar */}
      
      {/* Corrected component name and props */}
    </div>
  );
}
