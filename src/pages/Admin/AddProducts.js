import React from "react";
import "./AddProducts.scss";

const AddProducts = () => {
  return (
    <div className="register">
      <form className="register-form">
        <h4>Add Products</h4>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="text"
            name="product_name"
            id="product_name"
            placeholder="Product Name"
          />
          <label htmlFor="floatingInput">Product Name</label>
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="text"
            name="product_price"
            id="product_price"
            placeholder="Product Price"
          />
          <label htmlFor="floatingInput">Prodcust Price</label>
          {/* <span className="text-danger"> {user.error_list.last_name}</span> */}
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input type="file" name="product_image" id="product_image " />
          <label htmlFor="floatingInput">Upload Image</label>

          {/* <span className="text-danger"> {user.error_list.email}</span> */}
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="text"
            name="product_description"
            id="product_description "
          />
          <label htmlFor="floatingInput">Product Description</label>
          {/* <span className="text-danger"> {user.error_list.user_address}</span> */}
        </div>
        {/*  */}
        <input
          type="submit"
          value="Register"
          className="btn btn-primary mt-5 register-btn"
        />
        <div className="login-link">
          <p className="create">
            I have an account.
            <br />
            <a href="#">Go to Log-in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
