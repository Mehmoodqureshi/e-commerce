import React, { useState } from "react";
import { FaBeer, FaCoffee, FaMusic, FaBicycle, FaCar, FaGamepad, FaHeart, FaPlane } from 'react-icons/fa';

const CatagoriesSlider = () => {
  const cards = [
    { name: "Card 1", icon: <FaBeer size={60} /> },
    { name: "Card 2", icon: <FaCoffee size={60} /> },
    { name: "Card 3", icon: <FaMusic size={60} /> },
    { name: "Card 4", icon: <FaBicycle size={60} /> },
    { name: "Card 5", icon: <FaCar size={60} /> },
    { name: "Card 6", icon: <FaGamepad size={60} /> },
    { name: "Card 7", icon: <FaHeart size={60} /> },
    { name: "Card 8", icon: <FaPlane size={60} /> },
     ];
  
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 4) % cards.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 4 + cards.length) % cards.length);
  };

  return (
    <div className="w-full top-8 h-64 relative overflow-hidden">
      <div className="flex gap-10 justify-center items-center md:gap-8 lg:gap-32">
        <button
          onClick={handlePrevious}
          className="absolute left-2 md:left-8 transform p-0 bg-gray-500 text-white rounded-full"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            <path strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {cards.slice(startIndex, startIndex + 4).map((card, index) => (
          <div
            key={startIndex + index}
            className="w-40 h-40 p-2 bg-white border rounded-lg shadow-md md:w-32 md:p-2 lg:w-40"
          >
            <div className="h-28 flex items-center justify-center md:h-28">{card.icon}</div>
            <div className="mt-2 text-sm text-center font-semibold md:text-base lg:text-lg">{card.name}</div>
          </div>
        ))}
        <button
          onClick={handleNext}
          className="absolute right-2 transform p-0 bg-gray-500 text-white rounded-full md:right-4"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CatagoriesSlider;