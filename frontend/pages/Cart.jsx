import React from "react";

function Cart() {
  return (
    <div className=" h-almost  flex flex-col lg:flex-row space-y-5 md:space-x-12 justify-center py-5 sm:py-0 mb-5 md:p-14 sm:mx-auto overflow:auto">
      {/* LEFT SIDE OF THE PAGE */}
      <div class="flex flex-col ">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-50">
                  <tr className="">
                    <th scope="col" className="px-8 py-2 text-sm text-black">
                      Product
                    </th>
                    <th scope="col" className="px-8 py-2 text-sm text-black">
                      Name
                    </th>
                    <th scope="col" className="px-8 py-2 text-sm text-black">
                      Extras
                    </th>
                    <th scope="col" className="px-8 py-2 text-sm text-black">
                      Price
                    </th>
                    <th scope="col" className="px-8 py-2 text-sm text-black">
                      Quantity
                    </th>
                    <th className="px-8 py-2 text-sm text-black">Total</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  <tr className="bg-white border-b">
                    <td className=" whitespace-nowrap px-8 py-2 text-sm text-gray-500">
                      <div className="w-[7rem] h-[7rem]">
                        <img className="w-full" src="/img/pizza.png" alt="" />
                      </div>
                    </td>

                    <td className=" whitespace-nowrap px-8 py-2 text-sm text-gray-500">
                      <span>Mike</span>
                    </td>

                    <td className="px-8 py-2 text-sm ">
                      <span>Double Infrediants, Spicy Sauce</span>
                    </td>

                    <td className=" whitespace-nowrap px-8 py-2 text-sm ">
                      <span>$20.21</span>
                    </td>

                    <td className=" whitespace-nowrap px-8 py-2 text-sm ">
                      <span className="">3</span>
                    </td>

                    <td className=" whitespace-nowrap px-8 py-2 text-sm font-bold ">
                      <span>60.63</span>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td className=" whitespace-nowrap px-8 py-2 text-sm text-gray-500">
                      <div className="w-[7rem] h-[7rem]">
                        <img className="w-full" src="/img/pizza.png" alt="" />
                      </div>
                    </td>

                    <td className=" whitespace-nowrap px-8 py-2 text-sm text-gray-500">
                      <span>Mike</span>
                    </td>

                    <td className="px-8 py-2 text-sm ">
                      <span>Double Infrediants, Spicy Sauce</span>
                    </td>

                    <td className=" whitespace-nowrap px-8 py-2 text-sm ">
                      <span>$20.21</span>
                    </td>

                    <td className=" whitespace-nowrap px-8 py-2 text-sm ">
                      <span className="">3</span>
                    </td>

                    <td className=" whitespace-nowrap px-8 py-2 text-sm font-bold ">
                      <span>$60.63</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE OF THE PAGE */}
      <div className="">
        <div className="pt-10 flex flex-col items-center w-[20rem] h-[14rem] bg-zinc-700 text-white mx-auto rounded ">
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

          <button className="bg-white text-red-700 font-bold w-[12rem] h-[1.5rem] rounded mt-3 overflow-auto">
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
