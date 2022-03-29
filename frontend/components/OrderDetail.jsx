import { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className="absolute w-[100%] bg-[#776f6f70] h-almost flex top-0 left-0 right-0 justify-center items-center">
      <div className="bg-white w-[40rem] rounded p-16 flex flex-col justify-center items-center z-50 ">
        <h1 className="text-3xl font-bold pb-8">
          You will pay $12 after delivery.
        </h1>
        <div className="flex flex-col w-full pb-2">
          <label className="">Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            className="border pl-2"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className=" flex flex-col  w-full pb-2">
          <label className="">Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className="border pl-2"
          />
        </div>
        <div className="flex flex-col w-full mb-3 ">
          <label className="">Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className="border pl-2"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          className="border w-20 rounded bg-[teal] text-white cursor-pointer"
          onClick={handleClick}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
