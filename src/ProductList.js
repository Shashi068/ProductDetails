import React from "react";
import { useNavigate } from "react-router-dom";
export default function ProductList() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Products List</h1>
      <table>
        <p className="heading">List Of Prducts</p>
        <tr>
          <th>Product Name</th>
          <th>Product Quantity</th>
          <th>Product Price</th>
          <th>Update</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button type="button" onClick={() => navigate("/UpdateProduct")}>
              Edit
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
