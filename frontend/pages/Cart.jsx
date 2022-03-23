import React from "react";

function Cart() {
  return (
    <div className="flex ">
      {/* LEFT SIDE OF THE PAGE */}
      <div>
        <table>
          <tr className="">
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          <tr>
            <td>
              <div>
                <img src="/img/pizza.png" alt="" />
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
              <div>
                <img src="/img/pizza.png" alt="" />
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
        </table>
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
