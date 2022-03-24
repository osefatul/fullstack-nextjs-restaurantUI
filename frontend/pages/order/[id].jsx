import React from "react";

function id() {
  return (
    <div className="h-almost flex flex-col md:flex-row pt-10">
      {/* LEFT SIDE */}
      <div className="flex flex-col basis-2/3">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-3 lg:px-4">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="">
                  <tr>
                    <th className="px-4  py-2 text-sm text-black">Order ID</th>
                    <th className="px-4  py-2 text-sm text-black">Customer</th>
                    <th className="px-4  py-2 text-sm text-black">Address</th>
                    <th className="px-4  py-2 text-sm text-black">Total</th>
                  </tr>

                  <tr></tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="basis-1/3">
        <div className="flex flex-col p-10 w-[20rem] h-[16rem] bg-zinc-700 text-white mx-auto rounded ">
          <div className=" flex flex-col justify-center text-left">
            <h2 className="text-lg md:text-xl font-bold mb-5">CART TOTAL</h2>
            <div className="">
              <b className="pr-2"> Subtotal:</b>$79..8
            </div>

            <div>
              <b className="pr-2">Discount</b>$0.00
            </div>

            <div>
              <b className="pr-2">Total:</b>$81.4
            </div>
          </div>

          <button className="bg-white text-green-500 font-bold w-full h-[1.5rem] rounded mt-3 overflow-auto">
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}

export default id;
