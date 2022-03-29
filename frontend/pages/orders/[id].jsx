import React, { useState } from "react";
import styles from "../../styles/Order.module.css";
import axios from "axios";

function id({ order }) {
  const status = order.status;

  // I have used vanila CSS here
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div
      className=" h-almost flex flex-col md:flex-row justify-center
    space-y-5 md:space-x-12  py-5 sm:py-0 mb-5 md:p-14  sm:mx-auto overflow:auto "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-8 lg:-mx-12 mb-10">
          <div className="py-4 inline-block min-w-full sm:px-4 lg:px-5">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="">
                  <tr>
                    <th className="px-6  py-2 text-sm text-black">Order ID</th>
                    <th className="px-6  py-2 text-sm text-black">Customer</th>
                    <th className="px-6  py-2 text-sm text-black">Address</th>
                    <th className="px-6  py-2 text-sm text-black">Total</th>
                  </tr>

                  <tr>
                    <td className=" whitespace-nowrap px-4 py-2 text-sm text-black">
                      <span>{order._id}</span>
                    </td>
                    <td className="px-4  py-2 text-sm text-black">
                      <span>{order.customer}</span>
                    </td>
                    <td className="px-4  py-2 text-sm text-black">
                      <span>{order.address}</span>
                    </td>
                    <td className=" whitespace-nowrap  px-4  py-2 text-sm text-black">
                      <span>${order.total}</span>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="flex  justify-around ">
          <div className={statusClass(0)}>
            <img src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="">
              <img
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <img src="/img/bake.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="">
              <img
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <img src="/img/bike.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="">
              <img
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <img src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="">
              <img
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
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
              <b className="pr-2"> Subtotal:</b>${order.total}
            </div>

            <div>
              <b className="pr-2">Discount</b>$0.00
            </div>

            <div>
              <b className="pr-2">Total:</b>${order.total}
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

//SSR for single product: wea re using and ID for that product.

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default id;
