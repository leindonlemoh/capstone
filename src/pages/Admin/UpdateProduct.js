import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserAccount from "../UserAccount/UserAccount";
import swal from "sweetalert";

const UpdateProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({
    product_name: "",
    product_price: "",
    product_image: "",
    product_description: "",
  });

  useEffect(() => {
    axios.get(`/users/${id}`).then((res) => {
      console.log(res.data[0]);
      setProducts({
        product_name: res.data[0].product_name,
        product_price: res.data[0].product_price,
        product_image: res.data[0].product_image,
        product_description: res.data[0].product_description,
      });
    });
  }, [id]);

  const onInputChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      product_name: products.product_name,
      product_price: products.product_price,
      product_image: products.product_image,
      product_description: products.product_description,
    };
    axios.post(`/users/${id}`, data).then((res) => {
      swal("Updated!", res.data.message, "success");
    });
  };

  return (
    <div className="Products">
      <form
        className="addProduct-form"
        onSubmit={onFormSubmit}
        encType="multipart/form-data"
      >
        <h4>Update Products</h4>

        {/* NAME */}

        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="product-name"
            name="product_name"
            id="product_name"
            placeholder="Product Name"
            onChange={onInputChange}
            value={products.product_name}
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
            value={products.product_price}
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
            value={products.product_description}
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
