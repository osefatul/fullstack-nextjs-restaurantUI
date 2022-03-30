import React from "react";
import axios from "axios";
import { useState } from "react";

function index() {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];
  return (
    <div>
      <div>
        <h1>Products</h1>
      </div>
    </div>
  );
}

export default index;
