import React from 'react';
//import { LoginPage } from '..';
import './Account.scss';
import { Outlet } from 'react-router-dom';

const Account = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Account;