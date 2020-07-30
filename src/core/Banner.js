import React from "react";
import "./style.css";
import secure2 from "./images/secure2.svg";
import Logo from "./images/logo.png"
import Button from "./Button";

const Banner = () => {
  return (
    <div>
      <section id="banner" className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={Logo} className="img-fluid logo" alt="" />
              <p className="promo-title">ZERO DAY SEC</p>
              <h5>We are team ZeroDaySec</h5>
              <p className="lead">
              Our motive is to secure your Web App, Websies and Network. We have handpicked team of Cyber Security Enthusisat, who are Everday for you
              </p>
              <Button title="Learn More"/>
            </div>
            <div className="col-md-6 text-center">
              <img src={secure2} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;
