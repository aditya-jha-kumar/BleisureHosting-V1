import React from "react";
import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Button from "@/components/button";
import Card2 from "@/components/Card2";
import BrandStrip from "@/components/BrandStrip";
import SliderComponent from "@/components/SliderComponent";

const Home = () => {
  const reviews = [
    {
      profilePic: "/path/to/profile1.jpg",
      name: "John Doe",
      area: "San Francisco, CA",
      stars: 5,
      timeAgo: "2 days ago",
      durationOfStay: "Stayed 3 nights",
      review:
        "This place was amazing! The host was very accommodating and the location was perfect.",
    },
    {
      profilePic: "/path/to/profile2.jpg",
      name: "Jane Smith",
      area: "New York, NY",
      stars: 4,
      timeAgo: "1 week ago",
      durationOfStay: "Stayed 5 nights",
      review:
        "Great place to stay. The apartment was clean and well-equipped. Would recommend!",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
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

      {/* Hero section */}
      <div className="relative rounded overflow-hidden flex-1">
        <Hero
          logoSrc="/hero.png"
          logoAlt="Your alt text here"
          className="rounded"
        />
        {/* Search component placed on Hero */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Search placeholder="Search" />
        </div>
      </div>

      {/* Additional content */}
      <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-12 px-4">
        <h1 className="text-3xl font-bold">Welcome to the future</h1>
        <p className="mt-4">
          Discover peace of mind, flexibility, and confidence for your next
          adventure - whether it's a new job, a temporary home, medical
          relocation, or travel cravings - with the ease and comfort of a
          Bleisure home
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-center mt-8 space-x-4 md:space-x-8">
        <Card
          imageSrc="/card1.png"
          largeText="Emrald Valley Heights Homestay"
          smallText="Viman Nagar, Pune"
          showOverlay
          showArrow
        />
        <div className="md:mt-4">
          {/* Add margin top for medium screens */}
          <Card
            imageSrc="/card2.png"
            largeText="Golden Horizon Homestay"
            smallText="Viman Nagar, Pune"
            showOverlay
            showArrow
          />
          <Card
            imageSrc="/card3.png"
            largeText="Sunset Vista Homestay"
            smallText="Viman Nagar, Pune"
            showOverlay
            showArrow
          />
        </div>
      </div>

      {/* Additional content */}
      <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-12 px-4">
        <h1 className="text-xl font-bold">
          Now offering our lowest rates for 3+ month stays
        </h1>
        <Button text="Explore Properties >>" />
      </div>

      {/* Our Mission */}
      <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-12 px-4">
        <h1 className="text-3xl font-bold">Our Mission</h1>
        <p className="mt-4">
          Redefining short & medium-term rental accommodations with comfortable,
          furnished apartments equipped with all the amenities you need.
        </p>
        <Card
          imageSrc="our-mission.png"
          largeText=""
          smallText=""
          smallSize // Pass this prop to decrease the size
        />
      </div>
      {/* Revolutionizing */}
      <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-12 px-4">
        <h1 className="text-3xl font-bold">Revolutionizing Rental Living</h1>
        <p className="mt-4">
          Redefining short & medium-term rental accommodations with comfortable,
          furnished apartments equipped with all the amenities you need.
        </p>
      </div>

      {/* 3 Cards */}
      <div className="flex justify-center mt-8 space-x-4 md:space-x-8">
        <Card2 imageSrc="/card4.png" largeText="Stylish & Affordable" />
        <Card2 imageSrc="/card5.png" largeText="Modern Comfort" />
        <Card2 imageSrc="/card6.png" largeText="Prime Location" />
      </div>

      {/* Brand Strip */}
      <div className="flex justify-center mt-8">
        <BrandStrip
          logos={[
            { id: "1", src: "/logo1.png", alt: "Brand 1" },
            { id: "2", src: "/logo2.png", alt: "Brand 2" },
            { id: "3", src: "/logo3.png", alt: "Brand 3" },
            { id: "4", src: "/logo4.png", alt: "Brand 4" },
          ]}
        />
      </div>

      {/* Review Slider */}
      <div className="w-full mt-12 px-8">
        <SliderComponent reviews={reviews} />
      </div>
    </div>
  );
};

export default Home;
