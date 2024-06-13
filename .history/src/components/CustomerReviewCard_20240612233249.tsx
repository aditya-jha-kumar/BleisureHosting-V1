// components/CustomerReviewCard.tsx
import React from "react";

// Define the type for a single customer review
interface CustomerReview {
  id: string;
  profilePic: string;
  name: string;
  place: string; // Add place
  stars: number;
  timeAgo: string;
  durationOfStay: string;
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
          <p className="text-gray-500">{review.place}</p> {/* Place of customer */}
          <div className="flex items-center mt-1">
            <div className="inline-flex items-center gap-1 font-bold text-blue-gray-500">
              {review.stars.toFixed(1)} {/* Display star rating */}
              <div className="inline-flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 text-yellow-700 cursor-pointer ${
                      index < review.stars ? "text-yellow-500" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l-4 2v-4l-4-2 4-2v-4l4 2 4-2v4l4 2-4 2v4l-4-2z"
                    />
                  </svg>
                ))}
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500">
                Based on 134 Reviews
              </p>
            </div>
          </div>
          <p className="text-gray-500 mt-1">
            Added {review.timeAgo}, Stayed {review.durationOfStay}
          </p>
        </div>
      </div>
      <p className="text-gray-600 mt-4">{review.review}</p>
    </div>
  );
};

export default CustomerReviewCard;
