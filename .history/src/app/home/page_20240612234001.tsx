"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Search from "@/components/Search";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Button from "@/components/button";
import Card2 from "@/components/Card2";
import BrandStrip from "@/components/BrandStrip";
import CustomerReviewCard from "@/components/CustomerReviewCard";

const reviews = [
  {
    id: "1",
    profilePic: "/card1.png",
    name: "John Doe",
    place: "Rajasthan, India",
    stars: 5,
    review:
      "This place was amazing! The host was very accommodating and the location was perfect.",
    timeAgo: "1 week Ago",
    durationOfStay: "Stayed for 1 month",
  },
  {
    id: "2",
    profilePic: "/card2.png",
    name: "Jane Smith",
    place: "Rajasthan, India",
    stars: 4,
    review:
      "Great place to stay. The apartment waclean and well-equipped. Would recommend!",
    timeAgo: "1 week Ago",
    durationOfStay: "Stayed for 1 month",
  },
];
export default function Home() {
  const logos = [
    { id: "logo1", src: "/Amazon.png", alt: "Brand 1" },
    { id: "logo2", src: "/abbvie.png", alt: "Brand 2" },
    { id: "logo3", src: "/alphabet.png", alt: "Brand 3" },
    { id: "logo4", src: "/aosmith.png", alt: "Brand 4" },
    { id: "logo5", src: "/allstate.png", alt: "Brand 5" },
    { id: "logo6", src: "/agilent.png", alt: "Brand 6" },
    // Add more logos with unique ids as needed
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
        <h1 className="text-3xl font-bold">
          How We Are Revolutionizing <br /> the Rental Game
        </h1>
        <div className="flex flex-nowrap justify-center mt-8 space-x-4 md:space-x-8 overflow-x-auto">
          <Card2 imageSrc="/a3.png" largeText="Ready to move-in homes" />
          <Card2 imageSrc="/a4.png" largeText="Flexible terms" />
          <Card2 imageSrc="/a1.png" largeText="Nothing to worry about" />
          <Card2
            imageSrc="/a2.png"
            largeText="Hand-picked homes and interiors for best comfort"
          />
        </div>
      </div>
      {/* Partners */}
      <div className="flex flex-col items-center justify-center text-center mt-2 mx-10 px-4">
        <h1 className="text-3xl font-bold">Corporate Partnerships & Reviews</h1>
      </div>
      {/* Brandstrip */}
      <div className="w-full bg-white flex flex-col items-center justify-center mx-10">
        <BrandStrip logos={logos} />
      </div>
      {/* Review */}
      <div>
        <div className="container ml-20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <CustomerReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Redefining living</h1>
        <div>
          <Card
            imageSrc="/card1.png"
            largeText="Corporate Travelers"
            smallText=""
            showOverlay
          />
          <Card
            imageSrc="/card1.png"
            largeText="Medical Treatment Relocations"
            smallText=""
            showOverlay
          />
          <Card
            imageSrc="/card1.png"
            largeText="Temporary housing between Leases"
            smallText=""
            showOverlay
          />
          <Card
            imageSrc="/card1.png"
            largeText="Travel Enthu"
            smallText=""
            showOverlay
          />
        </div>
      </div>
    </div>
  );
}
