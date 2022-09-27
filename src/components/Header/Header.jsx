import React from "react";
import { Bag } from "../";
import { Link, NavLink, Navigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import "./Header.scss";

const Header = ({ user, onLogout }) => {
  const { toggleBag, setToggleBag } = useStateContext();

  // let btn = (
  //   <NavLink to="login">
  //     <button className="btn btn-link text-dark ">Login</button>
  //   </NavLink>
  // );

  // if (user.id) {
  //   btn = (
  //     <NavLink to="login">
  //       <button
  //         className="btn btn-link text-dark text-decoration-none"
  //         onClick={() => {
  //           onLogout({});
  //           <Navigate to="/" replace />;
  //         }}
  //       >
  //         Logout
  //       </button>
  //     </NavLink>
  //   );
  // }

  return (
    <div className="header fixed">
      <div className="header__container flex">
        <div className="logo__container grid">
          <Link to="/">
            <h1>Making Dough</h1>
          </Link>
        </div>

        <nav>
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

<<<<<<< HEAD
            <Link
              to="login"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
            >
              <li className="nav__item">
              {btn}
              </li>
            </Link>

            

=======
            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
            >
              <li className="nav__item">Login{/* <div>{btn}</div> */}</li>
            </NavLink>
>>>>>>> origin/master
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
