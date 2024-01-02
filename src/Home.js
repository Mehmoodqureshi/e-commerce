import React from "react";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Feature from "./Feature";
import Timer from "./Timer";
import ProductAd from "./ProductAd";
import ProductSlider from "./ProductSlider";
import CatagoriesSlider from "./CatagoriesSlider";
import ExploreProducts from "./ExploreProducts";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col md:flex-row p-8 m-5">
      <aside className="w-full md:w-64 bg-gray-800 text-white p-4 md:mr-4">
          <ul>
            <li className="py-2 cursor-pointer hover:bg-gray-700">
              Woman's Fashion
            </li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">
              Man's Fashion
            </li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">
              Electronics
            </li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">
              Home and Lifestyle
            </li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">Medicine</li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">
              Sports and Outdoor
            </li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">
              Baby's and Toys
            </li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">Groceries</li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">
              Health & Beauty
            </li>
          </ul>
        </aside>
        <Slider />
      </div>
      {/* Product Slider */}
      <div className="ml-12 flex items-center">
        <div className="w-8 h-10 relative">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
        </div>
        <div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
            Today’s
          </div>
        </div>
      </div>
      <div className="ml-12 mt-4 flex items-center gap-36 ">
        <div className="text-black text-4xl font-semibold tracking-wider">
          Sales Today
        </div>
        <div className="mb-4">
          <Timer />
        </div>
      </div>
      <div className="ml-6 mt-4">
        <ProductSlider />
        <div className="absolute  left-0 right-0 flex justify-center">
          <div className="w-40 h-12 bg-red-500 rounded flex justify-center items-center gap-2.5">
            <div className="text-neutral-50 text-base font-medium">
              View All Products
            </div>
          </div>
        </div>
      </div>
      {/* catagories Slider */}
      <div className="ml-12 mt-32 flex items-center">
        <div className="w-8 h-10 relative">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
        </div>
        <div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
            Catagories
          </div>
        </div>
      </div>
      <div className="ml-12 mt-4 flex items-center gap-36 ">
        <div className="text-black text-4xl font-semibold tracking-wider">
          Browse By Catagory
        </div>
      </div>
      <div className="mt-8">
        <CatagoriesSlider />
      </div>
      {/* best selling products */}
      <div className="ml-12 mt-12 flex items-center">
        <div className="w-8 h-10 relative">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
        </div>
        <div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
            This month
          </div>
        </div>
      </div>
      <div className="ml-12 mt-4 flex items-center justify-between">
        <div className="text-black text-4xl font-semibold tracking-wider">
          Best Selling Products
        </div>
        <div className="flex mr-6">
          <div className="w-24 h-10 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
              View All
            </div>
          </div>
        </div>
      </div>
      <div className="ml-6 mt-4">
        <ProductSlider />
      </div>
      {/* productAd */}
      <ProductAd />
      {/* our products */}
      <div className="ml-8 mt-12 flex items-center">
        <div className="w-8 h-10 relative">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
        </div>
        <div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
            Our Products
          </div>
        </div>
      </div>
      <div className="ml-12 mt-4 flex items-center gap-36 ">
        <div className="text-black text-4xl font-semibold tracking-wider">
          Explore Our Products
        </div>
      </div>
      <div className="">
        <ExploreProducts />
      </div>
      <div className="absolute  left-0 right-28 flex justify-center">
      <div className="w-full md:w-40 h-12 bg-red-500 rounded flex justify-center items-center gap-2.5">
          <div className="text-neutral-50 text-base font-medium">
            View All Products
          </div>
        </div>
      </div>
      <div className="pt-24">
        <Feature />
      </div>
          <Footer />
      
      </>
  );
}
export default Home;
