import React, { useState } from "react";
import { Bag } from "../";
import { Link, NavLink, Navigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import "./Header.scss";

const Header = ({ user }) => {
  const { toggleBag, setToggleBag } = useStateContext();
  const [loggedInUser, setLoggedInUser] = useState({});

  let btn = (
    <Link
      to="login"
      className={({ isActive }) => (isActive ? "activeNav" : "")}
    >
      Login
    </Link>
  );

  if (user.id) {
    btn = (
      <button className="btn btn-link text-dark text-decoration-none">
        Logout
      </button>
    );
  }

  return (
    <div className="header fixed">
      <div className="header__container flex">
        <div className="logo__container grid">
          <Link to="/">
            <h1>Making Dough</h1>
          </Link>
        </div>

        <nav user={loggedInUser}>
          <ul className="nav__list flex">
            <NavLink
              to="shop"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
            >
              <li className="nav__item">Shop</li>
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
            >
              <li className="nav__item">About</li>
            </NavLink>

            <li className="nav__item">
              <div>{btn}</div>
            </li>

            <button
              type="button"
              className="bag__btn"
              onClick={() => setToggleBag(true)}
            >
              Bag &#40;<span className="bag__qty">0</span>&#41;
            </button>
          </ul>
        </nav>
      </div>

      {toggleBag && <Bag />}
    </div>
  );
};

export default Header;
