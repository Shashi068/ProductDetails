import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Create Product</h1>
      <label>
        <b>Product Name</b>
      </label>
      <input type="text" placeholder="Enter Product Name" />

      <label>
        <b>Product Quantity</b>
      </label>
      <input type="text" placeholder="Enter Product Quantity" />

      <label>
        <b>Product Price</b>
      </label>
      <input type="text" placeholder="Enter Product price" />

      <div>
        <button type="submit" onClick={() => navigate("/ProductList")}>
          Submit
        </button>
      </div>
    </div>
  );
}
