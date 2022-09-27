import React, { useState } from "react";
import "./AddProducts.scss";
import axios from "axios";
import swal from "sweetalert";

const AddProducts = ({ user }) => {
  const [product, setProduct] = useState({
    product_name: "",
    product_image: "",
    product_price: "",
    category_id: "",
    product_description: "",
  });

  const onInputChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "product_image") {
      value = e.target.files[0];
    }

    setProduct({
      ...product,
      [e.target.name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   product_name: product.product_name,
    //   product_image: product.product_image,
    //   product_price: product.product_price,
    //   category_id: product.category_id,
    //   product_description: product.product_description,
    // };

    const formData = new FormData();
    for (let field in product) {
      formData.append(field, product[field]);
    }

    axios
      .post("http://localhost:3001/users/addproducts", formData)
      .then((res) => {
        swal("Success", "New Product Added", "success");
        console.log(res);
      });
  };

  if (!user.is_admin) {
    return;
  }
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

        {/* CATEGORY */}

        <div className="dropdown-center category">
          {/* <select
            name="category_id"
            className="category_id"
            id="category_id"
            onChange={onInputChange}
            value={product.category_id}
          >
            <option value="1">Bread</option>
            <option value="2">Pastry</option>
            <option value="3">Sandwhich</option>
          </select> */}

          <select
            class="form-select form-select-lg mb-3 category_id"
            aria-label=".form-select-lg example"
            name="category_id"
            id="category_id"
            onChange={onInputChange}
            value={product.category_id}
          >
            <option selected>Select Category</option>
            <option value="1">Bread</option>
            <option value="2">Pastry</option>
            <option value="3">Sandwhich</option>
          </select>
        </div>

        {/* DESCRIPTION */}

        <div className="form-floating ">
          <textarea
            placeholder="Description"
            id="product_description"
            className="form-control description-text"
            type="text"
            name="product_description"
            onChange={onInputChange}
            value={product.product_description}
          ></textarea>
          <label htmlFor="floatingTextarea">Description</label>
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

export default AddProducts;
