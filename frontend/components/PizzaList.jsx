import React from "react";
import PizzaCard from "./PizzaCard";
const PizzaList = ({ pizzaList }) => {
  // scollbar-hide is a library plugged into tailwind.config that hide scrollbar.
  return (
    <div className="flex flex-col items-center py-12 px-3 bg-white h-almost ">
      <h1 className="text-4xl text-black">THE BEST PIZZA IN TOWN</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-[#444] w-3/4 text-center sm:text-justify">
        Take the guesswork out of gift-giving! Select your gift card value up to
        $100 and send it today or on a date of your choice. No contact delivery
        is a request you can make that allows you to complete your order with
        limited personal interaction.
      </p>
      <div className="w-full flex items-center justify-center flex-wrap overflow-auto scrollbar-hide cursor-pointer">
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
