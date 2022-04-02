import React from "react";

function AddButton({ setClose }) {
  return (
    <div
      onClick={() => setClose(false)}
      className="p-3 m-12 bg-[#d1411e] w-36 cursor-pointer rounded-lg text-white text-center text-lg"
    >
      Add New Pizza
    </div>
  );
}

export default AddButton;
