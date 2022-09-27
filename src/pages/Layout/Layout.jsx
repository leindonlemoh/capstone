import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";
import "./Layout.scss";

const Layout = ({ onLogout }) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
