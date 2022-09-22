import React from "react";
import "./Login.scss";

const Login = () => {
    return (
        <div className='login-page'>
            <form className='login-form'>
                <h4>Log-in</h4>
                <div className='form-floating mb-3 '>
                    <input
                        type='email'
                        className='form-control email'
                        id='floatingInput'
                        placeholder='Enter Your Email'
                    />
                </div>
                <div className='form-floating mb-3 '>
                    <input
                        type='password'
                        className='form-control password'
                        id='floatingPassword'
                        placeholder='Password'
                    />
                </div>
                <input
                    type='submit'
                    value='Log-in'
                    className='btn btn-primary mt-5 login-btn'
                />
                <div className='link'>
                    <p className='create'>
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
