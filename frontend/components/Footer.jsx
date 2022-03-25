import React from "react";

function Footer() {
  return (
    <div className="flex h-almost bg-[#222] overflow-hidden z-50">
      <div className="relative h-full w-2/4">
        {/* className="absolute text-center inset-y-[20px] sm:inset-y-[10rem] md:inset-y-[18rem] xl:inset-y-[20rem] md:inset-x-20  text-xs sm:text-lg md:text-lg lg:text-lg xl:text-7xl " */}

        <img
          className="object-cover h-screen w-screen "
          src="/img/bg.png"
          alt=""
        />
      </div>

      <div
        className="flex flex-col items-center mx-auto  w-full
      py-[80px] xl:py-[2rem] 2xl:py-[12rem] ml-10 px-[4rem] 
      text-white overflow-auto scrollbar-hide"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <div className="mb-5 text-center space-y-11">
            <h1 className="text-lg lg:text-xl xl:text-4xl 2xl:text-5xl">
              <q className="text-[gold] ">
                IF YOU DIDN'T LIKE IT, DON'T PAY FOR IT. WE ARE CONFIDENT OF THE
                WDK PIZZA TASTE
              </q>
            </h1>
            <div className=" w-1/4 h-0.5 mx-auto rounded-full bg-[gold]" />
            <h1 className="text-lg lg:text-xl xl:text-4xl text-white w-full ">
              FIND OUR RESTAURANTS
            </h1>
          </div>

          <div
            className=" flex flex-col md:flex-row w-full
          text:sm lg:text-lg space-y-5 md:space-x-10 text-center justify-center"
          >
            <p className="mt-4">
              63312 Skaha Road#621.
              <br />
              Richmond, 85022.
              <br />
              202-604-4876
            </p>

            <p>
              3312 William Road#621.
              <br />
              Delta, 8022.
              <br />
              202-404-4076
            </p>
            <p>
              3112 Omar Road#621.
              <br />
              Vancouver, 85022.
              <br />
              232-234-9760
            </p>
            <p>
              1312 Guru Road#621.
              <br />
              Surrey, 85022.
              <br />
              222-674-4897
            </p>
          </div>
        </div>

        <div className="mt-10 ">
          <h1 className="text-center text-white text-lg lg:text-xl xl:text-4xl">
            WORKING HOURS
          </h1>

          <div className="flex flex-col md:flex-row text:sm lg:text-lg text-center space-y-4 md:space-x-24">
            <p className="mt-4">
              MON-FRI <br />
              10:30 - 22:00
            </p>

            <p>
              SAT-SUN <br />
              11:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
