import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <section className=""></section>
      <section className="offer">
        <div className="text-offer">
          <h4>What We Offer?</h4>
          <p>
            It started by simple sharing handemade baked goods with family,
            friends, neighbors just over <br />
            the fence. Today we are baking and delivering baked goods to our
            fellow humans out there.{" "}
            <button
              onClick={() => {
                navigate("/account/login");
              }}
            >
              {" "}
              Login
            </button>
          </p>
        </div>
        <div className="products-row container">
          <div className="row">
            <div className="col">
              <img src="" alt="Girl in a jacket" width="500" height="600" />
            </div>
            <div className="col">
              <img src="" alt="Girl in a jacket" width="500" height="600" />
            </div>
            <div className="col">
              <img src="" alt="Girl in a jacket" width="500" height="600" />
            </div>
            <div className="col">
              <img src="" alt="Girl in a jacket" width="500" height="600" />
            </div>
          </div>
        </div>
      </section>
      <section className=""></section>
      <section className=""></section>
    </div>
  );
};

export default Home;
