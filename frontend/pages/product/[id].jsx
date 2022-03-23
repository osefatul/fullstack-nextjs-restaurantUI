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
    <div className="h-almost flex flex-col md:flex-row items-center justify-center mx-auto py-5 overflow-auto scrollbar-hide bg-white">
      {/* Left */}
      <div className="flex items-center md:items-start py-0 md:py-16 justify-center h-full md:h-5/6 w-4/6 md:w-4/6 overflow-auto scrollbar-hide">
        {/* <div className="flex items-center justify- h-5/6 w-full relative"> */}
        <img className="object-contain" src={pizza.img} alt="" />
        {/* </div> */}
      </div>
      {/* Right */}
      <div className="py-4 h-full w-full pr-20 pl-5 mx-auto  overflow-auto scrollbar-hide">
        <div className="flex flex-col py-6 space-y-5 text-center md:text-left">
          <h1 className=" text-black text-4xl md:text-5xl font-bold">
            {pizza.name}
          </h1>
          <span className="text-[#d1411e] text-xl font-bold border-b-2 w-10 border-[#d1411e]">
            {pizza.price[size]}
          </span>
          <p className="text-lg md:text-xl xl:text-2xl 3xl:text-4xl ">
            {pizza.desc}
          </p>
        </div>

        {/* sizes */}
        <h3 className=" text-black text-xl md:text-2xl font-bold xl:text-4xl pb-4">
          Choose the size
        </h3>
        <div className="flex items-center justify-between w-full space-x-4 pb-20">
          <div
            className="w-[12rem] space-y-4 flex flex-col items-center justify-center relative"
            onClick={() => setSize(0)}
          >
            <img src="/img/size.png" alt="" />
            <span>Small</span>
          </div>
          <div
            className="w-[16rem] space-y-4 flex flex-col items-center justify-center"
            onClick={() => setSize(1)}
          >
            <img src="/img/size.png" alt="" />
            <span>Medium</span>
          </div>
          <div
            className="w-[20rem] space-y-4 flex flex-col items-center justify-center"
            onClick={() => setSize(2)}
          >
            <img src="/img/size.png" alt="" />
            <span>Large</span>
          </div>
        </div>

        <h3 className=" text-2xl pb-4">Choose Additional Ingredients</h3>

        {/* Ingredients */}
        <div className="">
          <div>
            <div>
              <input type="checkbox" id="double" name="double" />
              <label htmlFor="double">Double Ingredients</label>
            </div>
            <div>
              <input type="checkbox" id="cheese" name="cheese" />
              <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div>
              <input type="checkbox" id="spicy" name="spicy" />
              <label htmlFor="spicy">Spizy Sauce</label>
            </div>
            <div>
              <input type="checkbox" id="garlic" name="garlic" />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>
          </div>
        </div>

        <div className=" py-10">
          <input type="number" defaultValue={1} />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
