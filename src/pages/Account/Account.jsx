import React from 'react';
import './Account.scss';
import { RegisterPage, LoginPage } from '../'

const Account = () => {
  return (
    <div>
      <LoginPage />
      <RegisterPage />
    </div>
  );
}

export default Account;