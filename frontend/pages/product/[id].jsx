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
    <div className="h-almost flex py-5">
      {/* Left */}
      <div className="flex items-center justify-center h-full w-[40%]">
        <div className="h-5/6 w-5/6 relative">
          <img className="object-contain" src={pizza.img} alt="" />
        </div>
      </div>
      {/* Right */}
      <div className="p-5">
        <h1 className="text-3xl">{pizza.name}</h1>
        <span className="text-[#d1411e] text-xl font-normal border-b-2 border-[#d1411e]">
          {pizza.price[size]}
        </span>
        <p>{pizza.desc}</p>
        <h3>Choose the size</h3>

        {/* sizes */}
        <div>
          <div>
            <img src="/img/size.png" alt="" />
            <span>Small</span>
          </div>
          <div>
            <img src="/img/size.png" alt="" />
            <span>Medium</span>
          </div>
          <div>
            <img src="/img/size.png" alt="" />
            <span>Large</span>
          </div>
        </div>

        <h3>Choose Additional Ingredients</h3>

        {/* Ingredients */}
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

        <div>
          <input type="number" defaultValue={1} />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
