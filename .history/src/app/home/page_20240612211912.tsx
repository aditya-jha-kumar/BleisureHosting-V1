import React from "react";
import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Button from "@/components/button";
import Card2 from "@/components/Card2";
import BrandStrip from "@/components/BrandStrip";
import CustomerReviewSlider from "@/components/CustomerReviewSlider";
import { Review } from "@/types"; // Assuming you have a type definition for Review

const Home = () => {
  // Sample reviews data
  const reviews: Review[] = [
    {
      id: "1",
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
      id: "2",
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
        <Card2
          imageSrc="/card1.png"
          largeText="Card Title 1"
          smallText="Subtitle or location"
          showOverlay
          showArrow
        />
        <Card2
          imageSrc="/card2.png"
          largeText="Card Title 2"
          smallText="Subtitle or location"
          showOverlay
          showArrow
        />
        <Card2
          imageSrc="/card3.png"
          largeText="Card Title 3"
          showOverlay
          showArrow
        />
      </div>

      {/* Brand Strip */}
      <BrandStrip />

      {/* Customer Reviews */}
      <div className="mt-12">
        <CustomerReviewSlider reviews={reviews} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
