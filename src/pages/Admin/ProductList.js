import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const ProductList = ({ user }) => {
  const navigate = useNavigate();

  const [productlist, setProductList] = useState([]);

  useEffect(() => {
    axios.get("/users/productlist").then((res) => {
      setProductList(res.data);
    });
  }, []);

  const renderProducts = productlist.map((products) => {
    return (
      <tr key={products.product_id}>
        <td className="prod-name">{products.product_name}</td>
        <td className="prod-price">{products.product_price}</td>
        <td className="prod-desc">{products.product_description}</td>
        <td>
          <Link to={"/users/:id"} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          {" "}
          <Link to={""} className="btn btn-danger">
            Delete
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div
        className="flex"
        style={{
          width: "max-content",
          height: "max-content",
          padding: ".5rem 1rem",
          fontSize: "2rem",
          marginTop: "5rem",
        }}
      >
        <button onClick={() => navigate(-1)}>Add Products</button>
      </div>

      <div className="container mt-5 list">
        <h4>Product List</h4>
        <table className="table">
          <thead>
            <th> Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>{renderProducts}</tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
