import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";
import "./Layout.scss";

const Layout = ({ user }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <Header user={loggedInUser} onLogout={setLoggedInUser} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
