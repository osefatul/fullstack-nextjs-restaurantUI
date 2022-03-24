import React from "react";

function Cart() {
  return (
    <div className=" h-almost flex p-14">
      {/* LEFT SIDE OF THE PAGE */}

      <table>
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-2 text-xs text-gray-500">ID</th>
            <th class="px-6 py-2 text-xs text-gray-500">Name</th>
            <th class="px-6 py-2 text-xs text-gray-500">Email</th>
            <th class="px-6 py-2 text-xs text-gray-500">Created_at</th>
            <th class="px-6 py-2 text-xs text-gray-500">Edit</th>
            <th class="px-6 py-2 text-xs text-gray-500">Delete</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr class="whitespace-nowrap">
            <td class="px-6 py-4 text-sm text-gray-500">1</td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">Jon doe</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-500">jhondoe@example.com</div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="px-4 py-1 text-sm text-white bg-blue-400 rounded"
              >
                Edit
              </a>
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="px-4 py-1 text-sm text-white bg-red-400 rounded"
              >
                Delete
              </a>
            </td>
          </tr>
          <tr class="whitespace-nowrap">
            <td class="px-6 py-4 text-sm text-gray-500">1</td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">Jon doe</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-500">jhondoe@example.com</div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="px-4 py-1 text-sm text-white bg-blue-400 rounded"
              >
                Edit
              </a>
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="px-4 py-1 text-sm text-white bg-red-400 rounded"
              >
                Delete
              </a>
            </td>
          </tr>
          <tr class="whitespace-nowrap">
            <td class="px-6 py-4 text-sm text-gray-500">1</td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">Jon doe</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-500">jhondoe@example.com</div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="px-4 py-1 text-sm text-white bg-blue-400 rounded"
              >
                Edit
              </a>
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="px-4 py-1 text-sm text-white bg-red-400 rounded"
              >
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div className="">
        <table className="table-auto">
          <thead>
            <tr className="">
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="w-[5rem] h-[5rem]">
                  <img className="w-full" src="/img/pizza.png" alt="" />
                </div>
              </td>
              <td>
                <span>Mike</span>
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
      </div> */}

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
