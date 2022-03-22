import React from "react";

function Footer() {
  return (
    <div className="flex h-almost bg-[#222] overflow-hidden z-50">
      <div className="relative h-screen w-2/4">
        <h2 className="absolute text-center inset-y-[18rem] xl:inset-y-[24rem] md:inset-x-20  text-lg sm:text-xl md:text-xl lg:text-4xl xl:text-7xl ">
          <q className="text-[#ffd900d2]">
            IF YOU DIDN'T LIKE IT, DON'T PAY US. WE GUARANTEE THE WDK PIZZA
            TASTE
          </q>
        </h2>
        <img
          className="object-cover h-screen w-screen "
          src="/img/bg.png"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center mx-auto py-[12rem] px-[4rem] md:py-[16rem] ">
        <div className="flex flex-col py-16 items-center justify-center">
          <div className="py-4 text-center">
            <h1 className="text-4xl">FIND OUR RESTAURANTS</h1>
          </div>

          <div className="flex text space-x-10">
            <p>
              63312 Skaha Road #621.
              <br />
              Richmond, 85022.
              <br />
              202-604-4876
            </p>

            <p>
              3312 William Road #621.
              <br />
              Delta, 8022.
              <br />
              202-404-4076
            </p>
            <p>
              3112 Omar Road #621.
              <br />
              Vancouver, 85022.
              <br />
              232-234-9760
            </p>
            <p>
              1312 Guru Road #621.
              <br />
              Surrey, 85022.
              <br />
              222-674-4897
            </p>
          </div>
        </div>

        <div>
          <h1>WORKING HOURS</h1>
          <p>
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
  );
}

export default Footer;
