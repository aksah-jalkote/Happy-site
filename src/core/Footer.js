import React from "react";
import Socialmedia from "./Socialmedia";
import "./style.css"

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="text-white">ZERO D4Y</h4>
            <p className="text-white">
              The Cyber shield of Yours, we provide you security over network,
              subcribe Zero day for security, Development, Technology and Trends
            </p>
          </div>
          <div className="col-md-4 contact">
            <p>
              <b>Contact US</b>
            </p>
            <p>
              <i className="fa fa-location-arrow fas"></i>happy bsdiwale ka ghar,
              gujrat
            </p>
            <p>
              <i className="fa fa-phone fas" aria-hidden="true"></i>+91 12345678
            </p>
            <p>
              <i className="fa fa-envelope fas" aria-hidden="true"></i>xyz@gmail.com
            </p>
          </div>
          <div className="col-md-3">
            <p className="text-white">
              <b>SUBSCRIBE NEWSLETTER</b>
            </p>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="E-mail" />
            </div>
            <button className="btn btn-md" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <br/>
        <div className="container">
          <p className="text-center text-white">
            <i className="fa fa-copyright" aria-hidden="true"></i>Copyright by Zero
            Day 2020
          </p>
        </div>
    </div>
  );
};
export default Footer;
