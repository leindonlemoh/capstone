import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const ProductList = ({ user }) => {
  const [productlist, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://making-dough-server.herokuapp.com/users/productlist")
      .then((res) => {
        setProductList(res.data);
      });
  }, []);

  const renderProducts = productlist.map((products) => {
    return (
      <tr key={products.product_id}>
        <td className="prod-name">{products.product_name}</td>
        <td className="prod-price">{products.product_price}</td>
        <td className="prod-image">{products.product_image}</td>
        <td className="prod-desc">{products.product_description}</td>
        <td>
          <Link
            className="btn btn-primary"
            to={`/users/${products.product_id}`}
          >
            Edit
          </Link>
        </td>
        <td>Delete</td>
      </tr>
    );
  });

  return (
    <div className="container mt-5 list">
      <h4>Product List 2022</h4>
      <table className="table">
        <thead>
          <th className="name-th">Product Name</th>
          <th className="price-th">Price</th>
          <th className="image-th">Image</th>
          <th className="desc-th">Description</th>
          <th className="desc-th">Edit</th>
          <th className="desc-th">Delete</th>
        </thead>
        <tbody>{renderProducts}</tbody>
      </table>
    </div>
  );
};

export default ProductList;
