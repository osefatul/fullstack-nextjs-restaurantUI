import React from "react";
import axios from "axios";
import { useState } from "react";

function index({ orders, products }) {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];
  return (
    <div
      className=" h-almost flex flex-col md:flex-row justify-around
      sm:py-0 md:p-20  sm:mx-auto overflow:auto "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="">
          <div className="py-4 inline-block min-w-full overflow-x-auto ">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="">
                  <tr>
                    <th className="text-sm text-black">Image</th>
                    <th className="px-12  py-2 text-sm text-black">ID</th>
                    <th className="px-12  py-2 text-sm text-black">Title</th>
                    <th className="px-12  py-2 text-sm text-black">Price</th>
                    <th className="px-12  py-2 text-sm text-black">Action</th>
                  </tr>
                </thead>

                {pizzaList.map((product) => {
                  return (
                    <tbody className="">
                      <tr className=" ">
                        <td>
                          <img
                            src={product.img}
                            width={50}
                            height={50}
                            objectFit="cover"
                            alt=""
                          />
                        </td>
                        <td>{product._id.slice(0, 5)}...</td>
                        <td>{product.title}</td>
                        <td>${product.prices[0]}</td>
                        <td className="">
                          <button className="border w-16 bg-[teal] text-white rounded">
                            Edit
                          </button>
                          <button className="border w-16 bg-red-800 text-white rounded">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  ">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="overflow-x-auto  mb-10">
          <div className="py-4 inline-block min-w-full ">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="">
                  <tr>
                    <th className="text-sm text-black">Image</th>
                    <th className="px-12  py-2 text-sm text-black">ID</th>
                    <th className="px-12  py-2 text-sm text-black">Title</th>
                    <th className="px-12  py-2 text-sm text-black">Price</th>
                    <th className="px-12  py-2 text-sm text-black">Action</th>
                  </tr>
                </thead>

                {orderList.map((order, i) => {
                  return (
                    <tbody>
                      <tr className="">
                        <td>{order._id.slice(0, 5)}...</td>
                        <td>{order.customer}</td>
                        <td>${order.total}</td>
                        <td>
                          {order.method === 0 ? (
                            <span>cash</span>
                          ) : (
                            <span>paid</span>
                          )}
                        </td>
                        <td>{status[order.status]}</td>
                        <td>
                          <button onClick={() => handleStatus(order._id)}>
                            Next Stage
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default index;
