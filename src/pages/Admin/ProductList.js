import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

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
        <React.Fragment key={products.product_id}>
        <div>{products.product_name}</div>
        <div>{products.product_price}</div>
        <div>{products.product_image}</div>
        <div>{products.product_description}</div>
        </React.Fragment>
    );
  });

  return (
    <>
     <div className="flex" style={{ width: 'max-content', height: 'max-content', padding: '.5rem 1rem', fontSize: '2rem', marginTop: '5rem' }}><button onClick={() => navigate(-1)}>Add Product</button></div>
    <div className="container mt-5 list">

      <h4>Product List</h4>

      <div className="product-list grid" style={{ gridTemplateColumns: '15% 5% 1fr 20% 5% 5%' }}>
        <div>Product Name</div>
        <div>Price</div>
        <div>Image</div>
        <div>Description</div>
        <div>Edit</div>
        <div>Delete</div>

        {renderProducts}


      </div>


      {/* <table className="table">
        <thead>
          <th>Product Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>{renderProducts}</tr>
        </tbody>
      </table> */}
    </div>
    </>
  );
};

export default ProductList;
