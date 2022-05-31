import React from "react";
import PizzaCard from "./PizzaCard";
const PizzaList = ({ pizzaList }) => {
  // scollbar-hide is a library plugged into tailwind.config that hide scrollbar.
  return (
    <div className="flex flex-col items-center py-12 px-3 bg-white mx-auto ">
      <h1 className=" text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] 2xl:text-[42px] text-black">
        THE BEST PIZZA IN TOWN
      </h1>
      <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#444] w-3/4  sm:text-justify">
        Take the guesswork out of gift-giving! Select your gift card value up to
        $100 and send it today or on a date of your choice. No contact delivery
        is a request you can make that allows you to complete your order with
        limited personal interaction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-2 md:gap-4 p-2 md:p-6 scrollbar-hide cursor-pointer">
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
