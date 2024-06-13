"use clien"
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar"; // Make sure the path is correct

export default function Home() {
  return (
    <div>
      <Navbar
        logoSrc="/logo.png"
        logoAlt="Logo"
        button1Label="Button 1"
        button2Label="Button 2"
      />
      {/* Rest of your content */}
    </div>
  );
}
