import React from "react";

function Header() {
  return (
    <div className="w-full">
      <div className="w-full md:px-2 lg:px-16  bg-black flex justify-between items-center">
        <div className="flex gap-72">
          <div className="flex items-center text-white text-sm font">
              Make a Wish and it will be on your door
            </div>
            <div className="text-center flex items-center gap-4 text-white text-lg underline leading-normal">
              ShopNow
            </div>
            <div className="text-center flex items-center gap-4 left-2 text-white text-lg underline leading-normal">
              English
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
