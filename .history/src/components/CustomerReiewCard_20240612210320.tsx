// CustomerReviewCard.tsx
import React from "react";

interface CustomerReviewCardProps {
  profilePic: string;
  name: string;
  area: string;
  stars: number;
  timeAgo: string;
  durationOfStay: string;
  review: string;
}

const CustomerReviewCard: React.FC<CustomerReviewCardProps> = ({
  profilePic,
  name,
  area,
  stars,
  timeAgo,
  durationOfStay,
  review,
}) => {
  const renderStars = (numStars: number) => {
    return Array.from({ length: numStars }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.192c.969 0 1.371 1.24.588 1.81l-3.397 2.46a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.539 1.118l-3.397-2.46a1 1 0 00-1.175 0l-3.397 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118l-3.397-2.46c-.784-.57-.38-1.81.588-1.81h4.192a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={profilePic}
          alt={name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">{area}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <div className="flex">{renderStars(stars)}</div>
        <p className="ml-4 text-gray-600">{timeAgo}</p>
        <p className="ml-4 text-gray-600">{durationOfStay}</p>
      </div>
      <p className="mt-4 text-gray-800">{review}</p>
    </div>
  );
};

export default CustomerReviewCard;
