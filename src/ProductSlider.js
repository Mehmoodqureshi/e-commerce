import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "JoyStick",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.NL2JLWwf21g7KMpusBjjbQHaHa&pid=Api&P=0&h=220",
    amount: "$19.99",
    rating: 4.5,
  },
  {
    id: 2,
    name: "LCD",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.eC3v45AfMF9EzSe5Dgm4HwHaFY&pid=Api&P=0&h=220",
    amount: "$29.99",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Keyboard",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.-T_yFTbOWYwdgy7nRbjntQHaFj&pid=Api&P=0&h=220",
    amount: "$24.99",
    rating: 4.0,
  },

  {
    id: 4,
    name: "Mouse",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.hIopL8IfdrlAIkR_CRQlAwHaHa&pid=Api&P=0&h=220",
    amount: "$14.99",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Keyboard",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.GHGlz6oaKkLdi_GqPbkG4wHaCq&pid=Api&P=0&h=220",
    amount: "$19.99",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Gaming LCD",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.jon_xVmeNFbZlUR6M9xp2wHaFj&pid=Api&P=0&h=220",
    amount: "$24.99",
    rating: 4.0,
  },
  {
    id: 7,
    name: "Joystick",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.oO7IvfD-Tw58EyLt9_ezMQHaHa&pid=Api&P=0&h=220",
    amount: "$14.99",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Mouse",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Qj4pAH4t3Bsv3MxAz37pgAHaD7&pid=Api&P=0&h=220",
    amount: "$29.99",
    rating: 4.7,
  },
];
function ProductSlider() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNext = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 4) % products.length);
  };

  const handlePrevious = () => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex - 4 + products.length) % products.length
    );
  };

  const visibleProducts = products.slice(
    currentProductIndex,
    currentProductIndex + 4
  );

  return (
    <div className="relative">
      <div className="flex overflow-hidden m-12 md:justify-start md:ml-4 lg:ml-12">
        {visibleProducts.map((product) => (
          <div key={product.name} className="w-1/4 px-4 md:w-1/2 lg:w-1/4">
            <img
              src={product.image}
              alt={product.name}
              className="w-[172px] h-[102px] md:h-[152px] lg:h-[150px]"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-base">{product.amount}</p>
            <div className="flex items-center">
              <p className="text-base mr-2">{product.rating} ⭐</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute center-4 left-0 right-0 flex justify-center">
        <button
          onClick={handlePrevious}
          className="absolute left-0 bottom-40 transform p-0 bg-gray-500 text-white rounded-full"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            <path strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 bottom-40  transform p-0 bg-gray-500 text-white rounded-full"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            <path strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductSlider;
