import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const UpdateProduct = () => {
  const [product, setProducts] = useState({
    product_name: "",
    product_price: "",
    product_image: "",
    product_description: "",
  });

  const onFormSubmit = () => {};
  const onInputChange = () => {};

  return (
    <div className="Products">
      <form
        className="addProduct-form"
        onSubmit={onFormSubmit}
        encType="multipart/form-data"
      >
        <h4>Add Products</h4>

        {/* NAME */}

        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="product-name"
            name="product_name"
            id="product_name"
            placeholder="Product Name"
            onChange={onInputChange}
            value={product.product_name}
          />
          <label htmlFor="floatingInput">Product Name</label>
        </div>

        {/* PRICE */}

        <div className="form-floating mb-3">
          <input
            className="price"
            type="number"
            name="product_price"
            id="product_price"
            placeholder="Product Price"
            onChange={onInputChange}
            value={product.product_price}
          />
          <label htmlFor="floatingInput">Product Price</label>
          {/* <span className="text-danger"> {user.error_list.last_name}</span> */}
        </div>

        {/* IMAGE */}

        <div className="upimage">
          <input
            className="form-control form-control-lg"
            id="product_image"
            name="product_image"
            type="file"
            onChange={onInputChange}
          />
          <label htmlFor="formFileLg" className="form-label">
            Upload image
          </label>
        </div>

        {/* DESCRIPTION */}

        <div className="form-floating ">
          <textarea
            id="product_description"
            className="form-control description-text"
            type="text"
            name="product_description"
            onChange={onInputChange}
            value={product.product_description}
          ></textarea>
          <label htmlFor="floatingTextarea"></label>
        </div>

        {/*  */}

        <input
          type="submit"
          value="Submit"
          className="btn btn-primary mt-5 register-btn"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
