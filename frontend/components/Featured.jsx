import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { Carousel } from "antd";
const images = [
  "/img/featured.png",
  "/img/featured2.png",
  "/img/featured3.png",
];

function Featured() {
  return (
    <div className="">
      <Carousel className="flex items-center justify-center" autoplay>
        {images.map((image, index) => (
          <div>
            <img
              className="h-[200px] sm:h-[250px] md:h-[280px] w-full bg-[#e4a725] object-contain"
              src={image}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Featured;
