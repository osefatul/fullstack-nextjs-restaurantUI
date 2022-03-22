import React from "react";

function PizzaCard() {
  return (
    <div className=" text-black flex flex-col items-center justify-center w-1.5/4 p-2 py-5 px-10">
      <img className="w-72" src="/img/pizza.png" alt="" />
      <h1 className=" font-bold text-lg md:text-2xl text-[#d1411e]">
        Fiori Di Zucca
      </h1>
      <span className="text-lg font-bold text-[#666] ">$19.90</span>
      <p className="align-center text-[#666]">Delicious pizza.</p>
    </div>
  );
}

export default PizzaCard;
