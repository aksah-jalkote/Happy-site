import React from "react";
import secure3 from "./images/secure3.svg"

const About = () => {
  return (
    <div>
      <section id="about-us">
        <div className="container">
          <h1 className="text-center display-4">Why chosse us?</h1>
          <div className="row">
            <div className="col-md-6">
              <p className="about-title">What we'r different</p>
              <ul>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img src={secure3} className="img-fluid mt-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
