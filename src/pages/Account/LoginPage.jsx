import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import swal from "sweetalert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    };
    axios
      .post("/users/login", data)
      .then((res) => {
        swal("Success", "Logged in Successfully", "success");
      })
      .catch((err) => {
        console.log(err.response.data);
        swal("Error", err.response.data.message, "error");
      });
  };
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={onFormSubmit}>
        <h4>Log-in</h4>

        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            className={`form-control email`}
            name="email"
            id="email"
            type="email"
            placeholder="Enter your Email"
            onChange={onInputChange}
            value={user.email}
          />
        </div>
        {/*  */}
        <div className="form-floating mb-3 ">
          <input
            className={`form-control password`}
            name="password"
            id="password"
            type="password"
            placeholder="Enter your Email"
            onChange={onInputChange}
            value={user.password}
          />
        </div>
        {/*  */}
        <div className="input-group mb-3">
          <input
            type="submit"
            value="Login"
            className="btn btn-primary mt-5 login-btn"
          ></input>
        </div>
        {/*  */}
        <div className="link">
          <p className="create">
            Haven't been here before?
            <br />
            Create Your Account
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
