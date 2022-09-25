import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import axios from "axios";
import swal from "sweetalert";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

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
        onLogin({
          id: res.data.user_id,
          first_ame: res.data.first_name,
          last_name: res.data.last_name,
          is_admin: res.data.is_admin,
        });
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
        {/* password */}
        <div className="form-floating mb-3 ">
          <input
            className={`form-control password `}
            name="password"
            id="password"
            type="password"
            placeholder="Enter your Email"
            onChange={onInputChange}
            value={user.password}
          />
        </div>
        {/* button  */}
        <div className="input-group mb-3">
          <input
            type="submit"
            value="Log-in"
            className="btn btn-primary mt-5 login-btn"
          />
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
