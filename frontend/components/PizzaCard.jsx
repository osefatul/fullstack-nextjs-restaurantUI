import React from "react";
import Link from "next/link";
function PizzaCard({ pizza }) {
  return (
    <Link href={`/product/${pizza._id}`}>
      <div className=" text-black items-center justify-between w-[24rem] p-2 py-5 px-10">
        <img
          className="h-44 w-full object-contain py-2 self-start "
          src={pizza.img}
          alt=""
        />

        <div className="flex flex-col items-center justify-center p-5 bg-white">
          <h1 className=" font-bold text-lg md:text-2xl text-[#d1411e]  ">
            {pizza.title}
          </h1>
          <span className="text-lg font-bold text-[#666] ">
            ${pizza.prices[0]}
          </span>
          <p className="align-center text-[#666] ">{pizza.desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default PizzaCard;
