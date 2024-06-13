import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviewSlider = ({ reviews: any }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="customer-review-slider w-full">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-4">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  src={review.profilePic}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{review.name}</h2>
                  <p className="text-gray-600">{review.area}</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < review.stars ? "text-yellow-500" : "text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a.75.75 0 0 1 .673.418l2.06 4.787 5.285.407a.75.75 0 0 1 .416 1.279l-3.827 3.21 1.29 5.165a.75.75 0 0 1-1.145.854L10 15.697l-4.291 2.542a.75.75 0 0 1-1.145-.853l1.29-5.165-3.827-3.21a.75.75 0 0 1 .416-1.28l5.285-.407L9.327 1.418A.75.75 0 0 1 10 1zm0 2.445L8.615 6.013a.75.75 0 0 1-.564.41l-4.268.328 3.23 2.705a.75.75 0 0 1 .215.664l-.965 3.859 3.773-2.238a.75.75 0 0 1 .702 0l3.773 2.238-.965-3.858a.75.75 0 0 1 .215-.664l3.23-2.705-4.268-.328a.75.75 0 0 1-.564-.41L10 3.445V3.445z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="ml-4 text-gray-600">{review.timeAgo}</p>
                <p className="ml-4 text-gray-600">{review.durationOfStay}</p>
              </div>
              <p className="mt-4 text-gray-800">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviewSlider;
