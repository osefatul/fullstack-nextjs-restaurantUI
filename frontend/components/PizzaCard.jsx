import React from "react";
import Link from "next/link";
function PizzaCard({ pizza }) {
  return (
    <div className=" text-black flex flex-col items-center justify-center w-1.5/4 p-2 py-5 px-10">
      <Link href={`/product/${pizza._id}`}>
        <img className="w-72" src={pizza.img} alt="" />
      </Link>
      <h1 className=" font-bold text-lg md:text-2xl text-[#d1411e]">
        {pizza.title}
      </h1>
      <span className="text-lg font-bold text-[#666] ">${pizza.prices[0]}</span>
      <p className="align-center text-[#666]">{pizza.desc}</p>
    </div>
  );
}

export default PizzaCard;
