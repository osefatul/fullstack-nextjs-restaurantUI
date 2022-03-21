import Image from "next/image";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between  h-24 bg-red-800 px-12 sticky top-0 z-50">
      <div className="hidden sm:flex items-center ">
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

        <div className="  ml-5 text-white text-xs sm:text-sm lg:text-lg font-bold justify-end">
          <div className="">ORDER NOW!</div>
          <div className="">012 345 678</div>
        </div>
      </div>

      <div className="justify-start sm:hidden">
        <HiMenuAlt4
          className="cursor-pointer"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <div className=" h-screen w-screen fixed top-0 left-0 z-50 bg-orange-800 ">
            <HiX className="cursor-pointer" onClick={() => setToggle(false)} />
            <ul className="flex flex-col items-center justify-center space-y-3">
              {[
                "Homepage",
                "Products",
                "Menu",
                "Events",
                "Blogs",
                "Contact",
              ].map((item, i) => (
                <li
                  className="hover:bg-red-800"
                  key={i}
                  onClick={() => setToggle(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center">
        <ul
          className="flex items-center list-none text-white 
        space-x-1 md:space-x-2 lg:space-x-5 xl:space-x-10 "
        >
          {["Homepage", "Products", "Menu", "Events", "Blogs", "Contact"].map(
            (item, i) => (
              <li key={i}>{item}</li>
            )
          )}
        </ul>

        {/* <ul
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
        </ul> */}
      </div>

      <div className="justify-end">
        <div className="relative">
          <img
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 "
            src="/img/cart.png"
            alt=""
          />
          <div
            className="absolute top-[-10px] right-[-10px]
            w-3 h-3 sm:w-5 sm:h-5 bg-white rounded-full
            flex items-center justify-center
            text-xs sm:text-sm md:text-base font-bold text-red-800
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
