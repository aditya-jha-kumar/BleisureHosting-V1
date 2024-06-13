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
      \
      <Hero logoSrc="/hero.png" logoAlt="Your alt text here" />
      <Search />
    </div>
  );
}
