"use client";
import Navbar from "@/components/navbar"; // Make sure the path is correct

export default function Home() {
  return (
    <div>
      <Navbar
        logoSrc="/logo.png"
        logoAlt=""
        button1Label="Sign "
        button2Label="Button 2"
      />
      {/* Rest of your content */}
    </div>
  );
}
