import React from "react";
import { FaCar, FaHeadphones, FaCheck } from "react-icons/fa";

const features = [
  {
    icon: <FaCar size={40} />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery over $140",
  },
  {
    icon: <FaHeadphones size={40} />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <FaCheck size={40} />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

function Feature() {
  return (
    <div className=" w-3/4 mr-72 mb-8 flex justify-center items-center gap-10 sm:w-3/4 sm:ml-16 lg:w-2/3 lg:ml-auto  sm:flex-row sm:gap-10">
    {features.map((feature, index) => (
      <div key={index} className="w-full sm:w-1/3 mb-6 sm:mb-0 sm:ml-16 flex flex-col items-center gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 relative bg-zinc-200 rounded-full flex items-center justify-center">
          {feature.icon}
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-xl font-semibold text-black">{feature.title}</div>
          <div className="text-sm font-normal text-black">{feature.description}</div>
        </div>
      </div>
    ))}
  </div>

  );
}

export default Feature;
