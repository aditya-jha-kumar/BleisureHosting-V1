"use cliue"
// components/CustomerReviewCard.tsx
import React from "react";

// Define the type for a single customer review
interface CustomerReview {
  id: string;
  profilePic: string;
  name: string;
  stars: number;
  review: string;
}

// CustomerReviewCard component
const CustomerReviewCard = ({ review }: { review: CustomerReview }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center">
        <img
          src={review.profilePic}
          alt={review.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{review.name}</h2>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 fill-current ${
                  index < review.stars ? "text-yellow-400" : "text-gray-400"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l3.5 7m-7 0L11 19"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mt-4">{review.review}</p>
    </div>
  );
};

export default CustomerReviewCard;
