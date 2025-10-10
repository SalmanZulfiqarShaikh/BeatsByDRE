import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div
      className="flex flex-col items-center text-center bg-[#0e0e0e]/80 border border-gray-800
                 shadow-[0_0_25px_rgba(236,72,153,0.08)] hover:shadow-[0_0_35px_rgba(236,72,153,0.15)]
                 transition-all duration-300 rounded-2xl p-8 max-w-sm mx-auto backdrop-blur-md"
    >
      <img
        src={imgURL}
        alt={customerName}
        className="w-24 h-24 object-cover rounded-full border border-gray-700 mb-5"
      />

      <p className="text-gray-300 text-base leading-relaxed italic mb-4">
        “{feedback}”
      </p>

      <div className="flex items-center justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-lg ${
              i < Math.round(rating)
                ? "text-pink-500"
                : "text-gray-600"
            }`}
          />
        ))}
        <span className="text-gray-400 text-sm ml-2">{rating.toFixed(1)}</span>
      </div>

      <h4 className="text-white font-semibold text-lg">{customerName}</h4>
    </div>
  );
};

export default TestimonialCard;
