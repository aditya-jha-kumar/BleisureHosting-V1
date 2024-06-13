import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
impor
interface CustomerReviewCardProps {
  profilePic: string;
  name: string;
  area: string;
  stars: number;
  timeAgo: string;
  durationOfStay: string;
  review: string;
}

interface SliderComponentProps {
  reviews: CustomerReviewCardProps[];
}

const SliderComponent = ({ reviews }: SliderComponentProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.name} className="px-4">
            <CustomerReviewCard {...review} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
