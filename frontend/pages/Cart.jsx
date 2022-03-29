import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectTotal, reset } from "../redux/cartSlice";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const total = useSelector(selectTotal);

  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const amount = total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);

      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

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
                  {products.map((product) => {
                    return (
                      <tr key={product._id} className="bg-white border-b">
                        <td className=" whitespace-nowrap px-8 py-2 text-sm text-gray-500">
                          <div className="w-[7rem] h-[7rem]">
                            <img className="w-full" src={product.img} alt="" />
                          </div>
                        </td>

                        <td className=" whitespace-nowrap px-8 py-2 text-sm text-gray-500">
                          <span>{product.title}</span>
                        </td>

                        <td className="px-8 py-2 text-sm ">
                          {product.extras.map((extra) => {
                            return <span key={extra._id}>{extra.text}</span>;
                          })}
                        </td>

                        <td className=" whitespace-nowrap px-8 py-2 text-sm ">
                          <span>${product.price}</span>
                        </td>

                        <td className=" whitespace-nowrap px-8 py-2 text-sm ">
                          <span className="">{product.quantity}</span>
                        </td>

                        <td className=" whitespace-nowrap px-8 py-2 text-sm font-bold ">
                          <span>${product.price * product.quantity}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE OF THE PAGE */}
      <div className="">
        <div
          className={`pt-10 flex flex-col items-center 
          w-[20rem] h-[14rem] ${open ? "pb-[14rem]" : " "}
          bg-zinc-700 text-white mx-auto rounded`}
        >
          <h2 className="text-lg md:text-xl font-bold mb-5">CART TOTAL</h2>

          <div className="">
            <b className="pr-2"> Subtotal:</b>${total}
          </div>

          <div>
            <b className="pr-2">Discount</b>$0.00
          </div>

          <div>
            <b className="pr-2">Total:</b>${total}
          </div>

          {open ? (
            <div className="flex flex-col ">
              <button
                className="cursor-pointer m-2 rounded bg-white text-[teal] font-bold"
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "ASgikdrX5s_FaV07zKfX7mk9DPLLWeqscT2nHdZnNv7ZM9ZBWOUItM5wuBpIQL8HAUzy3G5iT49QZTAD",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24,venmo",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              className="bg-white text-red-700 font-bold w-[12rem] h-[1.5rem] rounded mt-3 overflow-auto"
              onClick={() => setOpen(true)}
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>

      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
}

export default Cart;
