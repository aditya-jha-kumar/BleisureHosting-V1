"use client";
import Navbar from "@/components/navbar"; // Make sure the path is correct
import Search from "@/components/Search"; // Make sure the path is correct

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
        button1Label="Sign up"
        button2Label="Button 2"
      />
      <Search />
    </div>
    <div>
      
    </div>
  );
}
