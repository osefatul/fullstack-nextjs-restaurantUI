import React from "react";
import axios from "axios";
import { useState } from "react";

function index({ orders, products }) {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];
  return (
    <div className="">
      <div
        className=" h-almost w-full flex flex-col lg:flex-row
        md:p-20 ml-5 overflow-x-auto mx-auto  "
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col lg:mx-16 mb-16 ">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class=" inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <h1 className="text-2xl font-bold ">Products</h1>

                <table className=" min-w-full text-center">
                  <thead className="">
                    <tr className="items-center justify-center">
                      <th scope="col" className=" py-2 text-sm text-black">
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  {pizzaList.map((product) => {
                    return (
                      <tbody className="">
                        <tr>
                          <td className="grid items-center justify-center">
                            <img
                              src={product.img}
                              width={50}
                              height={50}
                              objectFit="cover"
                              alt=""
                            />
                          </td>
                          <td>{product._id.slice(0, 10)}...</td>
                          <td>{product.title}</td>
                          <td>${product.prices[0]}</td>
                          <td className=" items-center justify-center">
                            <button className="border w-16 bg-[teal] text-white rounded  ">
                              Edit
                            </button>
                            <button
                              className="border w-16 bg-red-800 text-white rounded"
                              onClick={() => handleDelete(product._id)}
                            >
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

        <div className="flex flex-col lg:mx-16">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <h1 className="text-2xl font-bold ">Orders</h1>

                <table className=" text-center">
                  <thead className="">
                    <tr>
                      <th scope="col" className="pr-16 py-2 text-sm text-black">
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black whitespace-normal"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black"
                      >
                        Payment
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-16  py-2 text-sm text-black"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  {orderList.map((order, i) => {
                    return (
                      <tbody>
                        <tr className="">
                          <td>{order._id.slice(0, 10)}...</td>
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
                            <button
                              className="border w-24 bg-[teal] text-white rounded"
                              onClick={() => handleStatus(order._id)}
                            >
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
