import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { selectQuantity } from "../redux/cartSlice";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const quantity = useSelector(selectQuantity);

  return (
    <div
      className="flex items-center justify-between align-center  
    h-24 bg-red-800 px-6 sm:px-12 sticky top-0 z-50"
    >
      <div className="hidden md:flex items-center ">
        <div
          className="flex items-center justify-center
          rounded-full bg-white hover:bg-[gold]
          w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12  "
        >
          <img
            className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer"
            src="/img/telephone.png"
          ></img>
        </div>

        <div className=" ml-5 text-white text-xs sm:text-sm lg:text-lg font-bold justify-end cursor-pointer hover:text-[gold]">
          <div className="">ORDER NOW!</div>
          <div className="">012 345 678</div>
        </div>
      </div>

      {/* Navbar for bigger screen */}

      <div className="hidden md:flex items-center">
        <ul
          className="flex flex-1 items-center list-none text-white 
        space-x-1 md:space-x-4 lg:space-x-6 xl:space-x-10 "
        >
          {["Homepage", "Products", "Menu", "Events", "Blogs", "Contact"].map(
            (item, i) => (
              <Link href={`${item === "Homepage" ? "/" : ""}`}>
                <li
                  className="text-white text-xs sm:text-sm  lg:text-xl cursor-pointer hover:text-stone-400"
                  key={i}
                >
                  {item}
                </li>
              </Link>
            )
          )}
        </ul>
      </div>

      {/* Navbar for smaller screen */}
      <div className="justify-start md:hidden">
        <HiMenuAlt4
          className="text-white text-lg cursor-pointer "
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <div
            className="h-screen w-screen
            fixed top-0 left-0 z-50 
            bg-[#e4a725]  "
          >
            <HiX
              className="cursor-pointer m-3 text-white text-lg"
              onClick={() => setToggle(false)}
            />
            <ul className="flex flex-col space-y-3 py-20 ">
              {[
                "Homepage",
                "Products",
                "Menu",
                "Events",
                "Blogs",
                "Contact",
              ].map((item, i) => (
                <Link href={`${item === "Homepage" ? "/" : ""}`}>
                  <li
                    className=" text-black text-xl cursor-pointer hover:bg-red-800 w-screen flex items-center justify-center"
                    key={i}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Logo for smaller screen */}
      <div className="flex items-center justify-center text-lg font-serif text-white md:hidden">
        WDK Pizza
      </div>

      {/* Cart smaller and bigger screen  */}

      <Link href="/cart">
        <div className="justify-end cursor-pointer">
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
              {quantity}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
