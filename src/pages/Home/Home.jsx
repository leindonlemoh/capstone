import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Bake from "./images/bake.png";
import Bread from "./images/bread.png";
import Pastry from "./images/pastry.png";
import Sandwhich from "./images/sandwhich.png";
import Banner from "./images/banner.jpeg";
import Left from "./images/img1.jpeg";
import Right from "./images/img2.jpeg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <section className="Banner">
        <div className="banner-con">
          <img
            src={Banner}
            alt="baking"
            width="100%"
            height="100%"
            className="banner-image"
          />
          <div className="banner-text">
            <h3>
              Fresh <br /> From The Oven
            </h3>
            <p>
              We only use the finest ingredients, and we favour organic,

              <br />
              sustainable and local procedure.
              <br />

              sustainable and local procedure. <br />

              The result is heartfelt goodnesswith quality baked in.
            </p>
            <br />
            <button type="button" className="btn">
              Shop Now
            </button>
          </div>
        </div>
      </section>
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
        <div className="products container">
          {/* <div className="row">
            <div className="col">
              <img
                className="bread"
                src={Bread}
                alt="Bread"
                width="500"
                height="600"
              />
            </div>
            <div className="col">
              <img
                className="pastry"
                src={Pastry}
                alt="slice of cake"
                width="500"
                height="600"
              />
            </div>
            <div className="col">
              <img
                className="Sanwhich"
                src={Sandwhich}
                alt="Sandwhich"
                width="500"
                height="600"
              />
            </div>
            <div className="col">
              <img
                className=""
                src={Bake}
                alt="Girl in a jacket"
                width="500"
                height="600"
              />
            </div>
          </div> */}
        </div>
      </section>
      <section className="how">
        <div className="container">
          <div className="how-title">
            <h4>How?</h4>
          </div>
          <div className="how-content">
            <div className=" sign-up circle">
              <h5>Sign Up</h5>
              <p>
                enter your name,
                <br />
                complete address,
                <br />
                phone number
              </p>
            </div>
            <div className="how-shop circle">
              <h5>Shop</h5>
              <p>
                add to your basket the,
                <br />
                pastry, sanwhich and
                <br />
                the bread you want
              </p>
            </div>
            <div className=" go circle">
              <h5>Go</h5>
              <p>
                we offer same-day delivery,
                <br />
                or by schedule hassle free!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-workshop">
        <div className="hw-content">
          <div className="hw-contact">
            <h3>Baking Workshop</h3>
            <p>
              Bakingwshop@Baking.Com
              <br />
              (000)652-3334
            </p>
          </div>
          <div className="ws-images">

            <div className="center-image">
              <img src={Left} alt="baking" className="left-image" />
              <p>Monday, 10AM To 11 AM</p>
            </div>
            <div className="center-image">

            <div className="image">
              <img src={Left} alt="baking" className="left-image" />
              <p>Monday, 10AM To 11 AM</p>
            </div>
            <div className="image">

              <img src={Right} alt="baking" className="right-image" />
              <p>Wednesday, 1PM To 2 PM</p>
            </div>
            <div></div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
