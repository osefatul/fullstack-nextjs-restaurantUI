import React from "react";

function PizzaCard() {
  return (
    <div className=" flex flex-col items-center justify-center w-1/4 p-2 py-5 px-10">
      <img className="w-full" src="/img/pizza.png" alt="" />
      <h1>Fiori Di Zucca</h1>
      <span className="">$19.90</span>
      <p className="">Delicious pizza.</p>
    </div>
  );
}

export default PizzaCard;
