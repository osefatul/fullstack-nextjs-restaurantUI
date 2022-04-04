import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
function Add({ setClose }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = parseInt(e.target.value);
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({
      ...extra,
      [e.target.name]:
        e.target.name === "text" ? e.target.value : parseInt(e.target.value),
    });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ddgn3r0t2/image/upload",
        data
      );

      console.log(uploadRes);

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      console.log(newProduct);

      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen w-screen top-0 right-0 left-0 z-50 fixed flex items-center justify-center bg-[#f8f2f2ce]">
      <div className="bg-white w-[36rem] h-[36rem] rounded-lg py-4 px-6 flex flex-col justify-between relative text-black">
        <span
          className="w-6 h-6 flex items-center justify-center cursor-pointer mb-5 absolute -top-2 -right-1 rounded-full bg-black text-white"
          onClick={() => setClose(true)}
        >
          X
        </span>
        <h1 className="text-black text-xl font-bold">Add a new Pizza</h1>

        <div className="flex flex-col mb-3">
          <label className="mb-1 font-normal" htmlFor="">
            Choose an image
          </label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <div className="flex flex-col mb-3 text-black">
          <label className="text-black font-bold" htmlFor="">
            Title
          </label>
          <input
            className="border-b-2 border-gray"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-3 text-black">
          <label className="mb-1 text-black font-bold" htmlFor="">
            Desc
          </label>
          <textarea
            className="border-2 border-gray"
            type="text"
            rows={4}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-3 text-black">
          <label className="mb-1 text-black font-bold" htmlFor="">
            Prices
          </label>
          <div className="flex justify-between">
            <input
              className="border-b-2 border-gray w-[25%]"
              type="number"
              placeholder="Small"
              onChange={(e) => changePrice(e, 0)}
            />

            <input
              className="border-b-2 border-gray w-[25%]"
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />

            <input
              className="border-b-2 border-gray w-[25%]"
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>

        <div className="flex flex-col mb-3 text-black">
          <label className="mb-1 text-black font-bold" htmlFor="">
            Extra
          </label>
          <div className="flex justify-between mb-2">
            <input
              className="border-b-2 border-gray w-[25%]"
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className="border-b-2 border-gray w-[25%]"
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />

            <button
              className="border border-black rounded w-12"
              onClick={handleExtra}
            >
              Add
            </button>
          </div>

          <div className="my-3 mx-0">
            {extraOptions.map((option) => (
              <span
                key={option.text}
                className="p-2 text-lg border border-amber-700 bg-white text-[tomato] mr-2 rounded-lg cursor-pointer "
              >
                {option.text}
              </span>
            ))}
          </div>
        </div>

        <button
          className=" p-1 rounded w-[25%] bg-[teal] text-white cursor-pointer fonto-bold self-end"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Add;
