import React from "react";
import Timer from "./Timer";

const ProductAd = () => {
  return (
    <div className="max-w-screen-lg h-96 relative bg-black mx-auto">
      <div className="absolute w-3/10 h-full left-3/10 top-0 opacity-30 bg-zinc-300 rounded-full blur-3xl"></div>
      <div class="w-[443px] text-neutral-50 text-5xl font-semibold font-['Inter'] leading-[60px] tracking-widest">
        Enhance Your Music Experience
      </div>
      <div className="absolute text-white left-8 top-56 flex">
        <Timer />
      </div>
      <div className="px-12 py-4 absolute left-8 bottom-4 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex">
        <div className="text-neutral-50 text-base font-medium leading-normal">
          Buy Now!
        </div>
      </div>
      <div className="absolute w-2/5 h-2/3 px-4 right-24 top-4 justify-center items-center flex">
        <img
          className="w-70 h-90 object-cover"
          src="https://tse1.mm.bing.net/th?id=OIP.71_Dv1ccM-3bI4E38rWaxAHaEK&pid=Api&P=0&h=220"
          alt="Category"
        />
      </div>
    </div>
  );
};

export default ProductAd;
