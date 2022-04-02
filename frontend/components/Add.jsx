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
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
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

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen w-screen top-0 right-0 left-0 z-50 fixed flex items-center justify-center bg-[#f8f2f2ce]">
      <div className="bg-white w-[36rem] h-[22rem] rounded-lg py-4 px-6 flex flex-col justify-between relative">
        <span className="bg-black text-white" onClick={() => setClose(true)}>
          X
        </span>
        <h1>Add a new Pizza</h1>

        <div>
          <label className="" htmlFor="">
            Choose an image
          </label>
          <input
            className=""
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div>
          <label htmlFor="">Title</label>
          <input
            className=""
            type="text"
            onChange={(e) => setTitle(e.target.title)}
          />
        </div>

        <div>
          <label htmlFor="">Desc</label>
          <textarea
            type="text"
            rows={4}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Prices</label>
          <div>
            <input
              type="number"
              placeholder="small"
              onChange={(e) => changePrice(e, 0)}
            />

            <input
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />

            <input
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="">Extra</label>
          <div>
            <input
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />

            <button className="" onClick={handleExtra}>
              Add
            </button>
          </div>

          <div>
            {extraOptions.map((option) => {
              return (
                <span className="" key={option.text}>
                  {option.text}
                </span>
              );
            })}
          </div>
        </div>

        <button className="" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Add;
