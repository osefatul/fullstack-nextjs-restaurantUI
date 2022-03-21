import React, { useState } from "react";

const images = [
  "/img/featured.png",
  "/img/featured2.png",
  "/img/featured3.png",
];

function Featured() {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className="h-almost bg-[#dfa322] overflow-hidden flex items-center justify-center">
      <div
        className=" w-40 top-0 bottom-0 m-auto cursor-pointer z-10"
        onClick={() => handleArrow("l")}
      >
        <img src="/img/arrowl.png" alt="" />
      </div>

      <div className="flex-1 flex w-1/2 h-fit relative justify-center items-center ">
        <div
          className={`flex w-[100rem] justify-center items-center
          -translate-x-[${200 * index}rem]`}
        >
          {images.map((image, i) => {
            return (
              <div
                className="flex items-center justify-center 
                min-w-[100%] xl:min-w-[150%] h-2/6 mx-24"
              >
                <img
                  className="block w-full h-full object-contain "
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className=" w-40  top-0 bottom-0 m-auto cursor-pointer z-10"
        onClick={() => handleArrow("r")}
      >
        <img className="object-contain" src="/img/arrowr.png" alt="" />
      </div>
    </div>
  );
}

export default Featured;
