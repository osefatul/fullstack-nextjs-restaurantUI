import React, { useState } from "react";

function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className="h-almost flex flex-col md:flex-row items-center justify-center mx-auto py-5 overflow-auto scrollbar-hide">
      {/* Left */}
      <div className="flex items-center md:items-start py-0 md:py-16 px-16 justify-center h-full md:h-5/6 w-[80%] md:w-[30%]  overflow-auto scrollbar-hide">
        {/* <div className="flex items-center justify- h-5/6 w-full relative"> */}
        <img className=" object-contain" src={pizza.img} alt="" />
        {/* </div> */}
      </div>
      {/* Right */}
      <div className=" text-black py-4 h-full  px-16 sm:pr-24 sm:pl-10 md:w-[70rem] space-y-4 overflow-auto scrollbar-hide">
        <div className="flex flex-col  py-6 space-y-5 md:text-left">
          <h1 className=" text-xl sm:text-2xl md:text-5xl font-bold text-center md:text-left">
            {pizza.name}
          </h1>
          <span className="text-[#d1411e] text-lg md:text-2xl border-b-2 w-14 border-[#d1411e]  place-self-center md:place-self-start">
            {`$${pizza.price[size]}`}
          </span>
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 3xl:text-4xl ">
            {pizza.desc}
          </p>
        </div>

        {/* sizes */}
        <h3 className="text-xl md:text-2xl font-bold xl:text-4xl pb-2">
          Choose the size:
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div
            className=" w-3/6 space-y-4 flex flex-col items-center justify-center relative mb-5 md:mb-0  sm:mr-5"
            onClick={() => setSize(0)}
          >
            <img className="w-[10rem]" src="/img/size.png" alt="" />
            {/* <span className="absolute top-[-20px] right-[-23px] w-[4rem] text-xs sm:text-sm lg:text-lg text-white bg-[teal] flex items-center justify-center rounded-full">
              Small
            </span> */}
          </div>
          <div
            className=" w-4/6 space-y-4 flex flex-col items-center justify-center relative mb-5 md:mb-0  sm:mr-5"
            onClick={() => setSize(1)}
          >
            <img
              className=" w-[12rem] justify-self-center"
              src="/img/size.png"
              alt=""
            />
            {/* <span className="absolute top-[-22px] right-[-20px] w-[5rem] text-xs sm:text-sm lg:text-lg h-8 text-white bg-[teal] flex items-center justify-center rounded-full">
              Medium
            </span> */}
          </div>
          <div
            className=" w-5/6 space-y-4 flex flex-col items-center justify-center relative mb-5 sm:mb-0 sm:mr-5 "
            onClick={() => setSize(2)}
          >
            <img className="w-[14rem] " src="/img/size.png" alt="" />
            {/* <span className="absolute top-[-18px] right-[-6px] w-[4rem] h-8 text-xs sm:text-sm lg:text-lg text-white bg-[teal] flex items-center justify-center rounded-full">
              Large
            </span> */}
          </div>
        </div>

        <h3 className=" text-xl md:text-2xl font-bold xl:text-4xl pb-4">
          Choose Additional Ingredients
        </h3>

        {/* Ingredients */}
        <div className="text-xs md:text-sm lg:text-lg xl:text-2xl font-normal ">
          <div className="flex flex-col sm:flex-row items-start  ">
            <div className=" flex items-center mb-1 sm:mr-5">
              <input
                className="w-6 h-6 mr-2"
                type="checkbox"
                id="double"
                name="double"
              />
              <label htmlFor="double">Double Ingredients</label>
            </div>
            <div className="flex items-center mb-1 mr-5  ">
              <input
                className="w-6 h-6 mr-2"
                type="checkbox"
                id="cheese"
                name="cheese"
              />
              <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div className=" flex items-center mb-1 mr-5 ">
              <input
                className="w-6 h-6 mr-2"
                type="checkbox"
                id="spicy"
                name="spicy"
              />
              <label htmlFor="spicy">Spizy Sauce</label>
            </div>
            <div className="flex items-center mb-1 mr-5 ">
              <input
                className="w-6 h-6 mr-2"
                type="checkbox"
                id="garlic"
                name="garlic"
              />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>
          </div>
        </div>

        <div className=" space-x-1">
          <input
            className="w-8 h-8 border-black border rounded "
            type="number"
            defaultValue={1}
          />
          <button className=" h-8 w-28 rounded bg-[teal] cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;