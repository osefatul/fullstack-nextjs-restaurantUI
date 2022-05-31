import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
// Define the props from SSR
function Product({ pizza }) {
  console.log(pizza);
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  // Change price of different sizes
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  // Adding extras
  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  // Clicking on ADD cart
  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <div className=" flex flex-col md:flex-row items-center justify-center mx-auto py-2 overflow-auto scrollbar-hide">
      {/* Left */}
      <div className="flex items-start md:items-start py-0 px-16 justify-start h-full md:h-5/6 w-[80%] md:w-[30%]  overflow-auto scrollbar-hide">
        {/* <div className="flex items-center justify- h-5/6 w-full relative"> */}
        <img className=" object-contain" src={pizza.img} alt="" />
        {/* </div> */}
      </div>
      {/* Right */}
      <div className=" text-black py-4 h-full  px-16 sm:pr-24 sm:pl-10 md:w-[70rem] space-y-4 overflow-auto scrollbar-hide">
        <div className="flex flex-col py-2 space-y-3 md:text-left">
          <h1 className="  text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] 2xl:text-[42px] font-bold text-center md:text-left">
            {pizza.title}
          </h1>
          <span className="text-[#d1411e] text-[10px] md:text-[11px] lg:text-[15px] border-b-2 w-14 border-[#d1411e]  place-self-center md:place-self-start">
            {`$${price}`}
          </span>
          <p className="text-[12px] md:text-[14px] lg:text-[18px] ">
            {pizza.desc}
          </p>
        </div>

        {/* sizes */}
        <h3 className=" text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] 2xl:text-[36px] ">
          Choose the size:
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-even ">
          <div
            className=" w-[20%] space-y-4 flex flex-col items-center justify-center relative mb-5 md:mb-0  sm:mr-5"
            onClick={() => handleSize(0)}
          >
            <img
              className="w-[6rem] cursor-pointer"
              src="/img/size.png"
              alt=""
            />
            {/* <span className="absolute top-[-20px] right-[-23px] w-[4rem] text-xs sm:text-sm lg:text-lg text-white bg-[teal] flex items-center justify-center rounded-full">
              Small
            </span> */}
          </div>
          <div
            className=" w-[23%] space-y-4 flex flex-col items-center justify-center relative mb-5 md:mb-0  sm:mr-5"
            onClick={() => handleSize(1)}
          >
            <img
              className=" w-[8rem] justify-self-center cursor-pointer"
              src="/img/size.png"
              alt=""
            />
            {/* <span className="absolute top-[-22px] right-[-20px] w-[5rem] text-xs sm:text-sm lg:text-lg h-8 text-white bg-[teal] flex items-center justify-center rounded-full">
              Medium
            </span> */}
          </div>
          <div
            className=" w-[25%] space-y-4 flex flex-col items-center justify-center relative mb-5 sm:mb-0 sm:mr-5 "
            onClick={() => handleSize(2)}
          >
            <img
              className="w-[10rem] cursor-pointer "
              src="/img/size.png"
              alt=""
            />
            {/* <span className="absolute top-[-18px] right-[-6px] w-[4rem] h-8 text-xs sm:text-sm lg:text-lg text-white bg-[teal] flex items-center justify-center rounded-full">
              Large
            </span> */}
          </div>
        </div>

        <h3 className=" text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] 2xl:text-[36px] pb-4">
          Choose Additional Ingredients
        </h3>

        {/* Ingredients */}
        <div className="text-[12px] md:text-[14px] lg:text-[18px] font-normal ">
          {pizza.extraOptions.map((option) => {
            return (
              <div
                className="flex flex-col sm:flex-row items-start"
                key={option._id + option.text}
              >
                <div
                  className=" flex items-center mb-1 sm:mr-5"
                  key={option._id}
                >
                  {console.log(option)}
                  <input
                    className="w-6 h-6 mr-2"
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    onChange={(e) => handleChange(e, option)}
                  />
                  <label htmlFor="double">{option.text}</label>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" space-x-1">
          <input
            className="w-8 h-8 border-black border rounded "
            type="number"
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className=" h-8 w-28 rounded bg-[teal] cursor-pointer"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

//SSR for single product: wea re using and ID for that product.
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
