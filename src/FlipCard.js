import React, { useState } from "react";
import "./Flipcard.css";
const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
console.log(isFlipped)
  return (
    <div className=" flex items-center justify-center">
    <div className="w-80">
      <div
        className={`transition-transform  duration-300 ${
          isFlipped ? "flip-animation" : ""
        }`}
      >
        <div className="  text-white p-4 flex flex-col justify-center items-center">
          <img
            alt=""
            className="h-14 w-14 "
            src="https://tse2.mm.bing.net/th?id=OIP.PB3QCTk1kCZZ6ZvvVqpM5gHaHa&pid=Api&P=0&h=220"
          />
          <h2 className="text-black">Welcome</h2>
        </div>
        <div className="  text-white p-4 flex flex-col justify-center items-center">
          {isFlipped ? (
             <div className="off-screen-container">
             <div className="h-82 w-64 p-4 gap-5 rounded-2xl bg-gray-200 shadow-xl flex flex-col items-stretch justify-evenly transition-transform duration-800">
             <span
                  className="h-10 text-center text-3xl font-semibold text-shadow-md font-white  relative top-[-14px]"
                >
                  Register
                </span>
              <input
                  className="h-8 p-1 text-lg text-black rounded-2xl bg-gradient-to-r from-white via-gray-300 to-white"
                  type="text"
                  placeholder="UserName"
                />
              <input
                type="email"
                placeholder="Enter your email"
                className="h-8 p-1  text-lg text-black  rounded-2xl bg-gradient-to-r from-white via-gray-300 to-white "/>
              <input
                type="password"
                placeholder="Enter your password"
                className="h-8 p-1 text-black rounded-2xl  bg-gradient-to-r from-white via-gray-300 to-white"

              />
              <input
                type="password"
                placeholder="Confirm your password"
                className="h-8 p-1 text-black rounded-2xl  bg-gradient-to-r from-white via-gray-300 to-white"

              />
              <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </button>


              </div>
              <p className="text-black">
                Already have an account?{" "}
                <span
                  onClick={toggleFlip}
                  className="cursor-pointer text-blue-700 underline"
                >
                  Login
                </span>
              </p>
            </div>
          ) : (
            <div>
              <div className="h-72 w-64 p-4 rounded-lg bg-gray-200 shadow-xl flex flex-col items-stretch justify-evenly">
                <span
                  className="h-10 text-center text-3xl font-semibold tracking-wider font-white text-shadow-md relative top-[-14px]"
                >
                  Login
                </span>
                <input
                  className="h-10 p-1  text-lg text-black   bg-gradient-to-r from-white via-gray-300 to-white"
                  type="text"
                  placeholder="UserName"
                />
                <input
                  className="h-10 p-1 text-black bg-gradient-to-r from-white via-gray-300 to-white "
                  type="password"
                  placeholder="PassWord"
                  minlength="8"
                  maxlength="15"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </button>
              </div>

              <div className="mt-4 flex justify-between font-semibold text-sm">
                <label className="flex text-black hover:text-blue-700 hover:underline hover:underline-offset-4 cursor-pointer">
                  <input className="mr-1" type="checkbox" />
                  <span>Remember Me</span>
                </label>
                <a
                  className="text-black hover:text-blue-700 hover:underline hover:underline-offset-4"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              {/* <button class="relative overflow-hidden h-12 px-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none">
                <span class="relative z-10">Submit</span>
                <span class="absolute inset-0 transform scale-x-0 transform-origin-left bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500 ease-in-out"></span>
              </button> */}
              <p className="text-black">
                Don't have an account?{" "}
                <span
                  onClick={toggleFlip}
                  className="cursor-pointer text-blue-700  underline"
                >
                  Register
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FlipCard;
