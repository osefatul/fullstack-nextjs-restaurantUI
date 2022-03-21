import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between  h-24 bg-red-800 px-12 sticky top-0 z-50">
      <div className=" flex items-center ">
        <div
          className="flex items-center justify-center
         rounded-full bg-white
         w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12  "
        >
          <img
            className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
            src="/img/telephone.png"
          ></img>
        </div>

        <div className="ml-5 text-white text-xs sm:text-sm lg:text-lg font-bold justify-end">
          <div className="">ORDER NOW!</div>
          <div className="">012 345 678</div>
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <ul
          className="flex items-center list-none text-white 
        space-x-1 md:space-x-2 lg:space-x-5 xl:space-x-10 "
        >
          <li className="">Products</li>
          <li className="">Homepage</li>
          <li className="">Menu</li>
          <img src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className="">Events</li>
          <li className="">Blog</li>
          <li className="">Contact</li>
        </ul>
      </div>

      <div className="justify-end">
        <div className="relative">
          <img src="/img/cart.png" alt="" width="30px" height="30px" />
          <div
            className="absolute top-[-10px] right-[-10px]
          w-5 h-5 bg-white rounded-full
          flex items-center justify-center
          font-bold text-red-800
          "
          >
            2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
