import React, { useState } from "react";
import "./Register.scss";
import axios from "axios";
import swal from "sweetalert";

const RegisterPage = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_address: "",
    contact_number: "",
    password: "",
    confirm_password: "",
    error_list: {},
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      user_address: user.user_address,
      contact_number: user.contact_number,
      password: user.password,
      confirm_password: user.confirm_password,
    };
    axios
      .post("http://localhost:3001/users/register", data)
      .then((res) => {
        swal("Success", "Registered Succesfully", "success");
        setUser({
          first_name: "",
          last_name: "",
          email: "",
          user_address: "",
          contact_number: "",
          password: "",
          confirm_password: "",
          error_list: {},
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        setUser({ ...user, error_list: err.response.data });
      });
  };

  return (
    <div className="register">
      <form className="register-form" onSubmit={onFormSubmit}>
        <h4>Create Account</h4>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="text"
            name="first_name"
            className={`form-control first-name ${
              user.error_list.first_name ? "is-invalid" : ""
            }`}
            id="first_name"
            placeholder="First Name"
            onChange={onInputChange}
            value={user.first_name}
          />
          <label htmlFor="floatingInput">First Name</label>
          <span className="text-danger"> {user.error_list.first_name}</span>
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="text"
            name="last_name"
            className={`form-control last-name ${
              user.error_list.last_name ? "is-invalid" : ""
            }`}
            id="last_name"
            placeholder="Last Name"
            onChange={onInputChange}
            value={user.last_name}
          />
          <label htmlFor="floatingInput">Last Name</label>
          <span className="text-danger"> {user.error_list.last_name}</span>
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="email"
            name="email"
            className={`form-control email ${
              user.error_list.email ? "is-invalid" : ""
            }`}
            id="email "
            placeholder="name@example.com"
            onChange={onInputChange}
            value={user.email}
          />
          <label htmlFor="floatingInput">Email</label>
          <span className="text-danger"> {user.error_list.email}</span>
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="text"
            name="user_address"
            className={`form-control address-register ${
              user.error_list.user_address ? "is-invalid" : ""
            }`}
            id="user_address "
            placeholder="#268 Pagdalagan Norte... "
            value={user.user_address}
            onChange={onInputChange}
          />
          <label htmlFor="floatingInput">Address</label>
          <span className="text-danger"> {user.error_list.user_address}</span>
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="number"
            name="contact_number"
            className={`form-control contact-register ${
              user.error_list.contact_number ? "is-invalid" : ""
            }`}
            id="contact_number "
            placeholder="09848658761"
            value={user.contact_number}
            onChange={onInputChange}
          />
          <label htmlFor="floatingInput">Contact Number</label>
          <span className="text-danger"> {user.error_list.contact_number}</span>
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="password"
            name="password"
            className={`form-control password ${
              user.error_list.password ? "is-invalid" : ""
            }`}
            id="password"
            placeholder="Password"
            onChange={onInputChange}
            value={user.password}
          />
          <label htmlFor="floatingPassword">Password</label>
          <span className="text-danger"> {user.error_list.password}</span>
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            type="password"
            name="confirm_password"
            className={`form-control password ${
              user.error_list.confirm_password ? "is-invalid" : ""
            }`}
            id="confirm_password"
            placeholder="Password"
            onChange={onInputChange}
            value={user.confirm_password}
          />
          <label htmlFor="floatingPassword">Confirm Password</label>
          <span className="text-danger">
            {" "}
            {user.error_list.confirm_password}
          </span>
        </div>
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

export default RegisterPage;