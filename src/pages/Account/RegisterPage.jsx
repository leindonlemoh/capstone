import React from "react";
import "./Register.scss";

const RegisterPage = () => {
  return (
    <div className="register">
      <form className="register-form">
        <h4>Create Account</h4>
    
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control first-name"
            id="floatingInput"
            placeholder="First Name"
          />
        </div>
 
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control last-name"
            id="floatingInput"
            placeholder="Last Name"
          />
          
        </div>

        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control email-register"
            id="floatingInput"
            placeholder="Email"
          />
         
        </div>
     
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control password-register"
            id="floatingPassword"
            placeholder="Password"
          />
         
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
        Go to Log-in
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;