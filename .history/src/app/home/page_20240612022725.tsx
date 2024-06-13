"use client";
import Navbar1 from "@/components/navbar"; // Make sure the path is correct

export default function Home() {
  return (
    <div>
      <Navbar1
        logoSrc="/logo.png"
        logoAlt="Logo"
        link2="Place to stay"
        link3="Experience"
        link4="Nearby"
        link5="Contact"
        action1="Action 1"
        action2="Action 2"
      />
      {/* Rest of your content */}
    </div>
  );
}
