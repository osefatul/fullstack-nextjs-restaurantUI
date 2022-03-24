import React from "react";

function Cart() {
  return (
    <div className=" h-almost w-screen flex flex-col md:flex-row justify-around p-14">
      {/* LEFT SIDE OF THE PAGE */}
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-50">
                  <tr className="">
                    <th scope="col" className="px-8 py-2 text-sm text-gray-500">
                      Product
                    </th>
                    <th scope="col" className="px-8 py-2 text-sm text-gray-500">
                      Name
                    </th>
                    <th scope="col" className="px-8 py-2 text-sm text-gray-500">
                      Extras
                    </th>
                    <th scope="col" className="px-8 py-2 text-sm text-gray-500">
                      Price
                    </th>
                    <th scope="col" className="px-8 py-2 text-sm text-gray-500">
                      Quantity
                    </th>
                    <th className="px-8 py-2 text-sm text-gray-500">Total</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  <tr className="bg-white border-b">
                    <td className=" whitespace-nowrap px-8 py-2 text-sm text-gray-500">
                      <div className="w-[5rem] h-[5rem]">
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
                    <td className=" whitespace-nowrap px-8 py-2 text-sm ">
                      <span>60.63</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="w-[5rem] h-[5rem]">
                        <img className="w-full" src="/img/pizza.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <span>Henry</span>
                    </td>
                    <td>
                      <span>Double Infrediants, Spicy Sauce</span>
                    </td>
                    <td>
                      <span>$20.21</span>
                    </td>
                    <td>
                      <span>3</span>
                    </td>
                    <td>
                      <span>60.63</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE OF THE PAGE */}
      <div>
        <div>
          <h2>Cart Total</h2>

          <div>
            <b>Subtotal:</b>$79..8
          </div>

          <div>
            <b>Discount</b>$0.00
          </div>

          <div>
            <b>Total:</b>$81.4
          </div>

          <button>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
