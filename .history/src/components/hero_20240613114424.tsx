// "use client";
// import React from "react";

// interface HeroProps {
//   logoSrc: string;
//   logoAlt: string;
//   className?: string; // Make className optional
// }

// const Hero = ({ logoSrc, logoAlt, className }: HeroProps) => {
//   return (
//     <div className={`${className} relative z-0`}>
//       <div className="relative">
//         <img src={logoSrc} alt={logoAlt} className="w-full h-auto" />
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-96">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
      />
      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <div className="text-sm">Small Text</div>
        <div className="text-3xl font-bold">Large Text</div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-3xl">
        <div className="bg-white p-4 rounded-lg shadow-lg flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="material-icons">place</span>
            <input
              type="text"
              placeholder="Location"
              className="outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">calendar_today</span>
            <input
              type="date"
              placeholder="Check-in"
              className="outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">calendar_today</span>
            <input
              type="date"
              placeholder="Check-out"
              className="outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">people</span>
            <input
              type="number"
              placeholder="Guests"
              className="outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
