import React from "react";
import Button from "./Button";

const Services = () => {
  return (
    <div>
      <section id="services">
        <h1 className="text-center display-4">What we do?</h1>
        <div className="container text-center">
          <div className="row text-center">
            <div className="col service">
              <img src="" alt="" />
              <h4>Vulnerability Assesment</h4>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis nostrum nulla deleniti at saepe amet ad facere
              </p>
            </div>
            <div className="col service">
              <img src="" alt="" />
              <h4>Penetration testing</h4>

              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis nostrum nulla deleniti at saepe amet ad facere
              </p>
            </div>
            <div className="col service">
              <img src="" alt="" />
              <h4>Network Security</h4>

              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis nostrum nulla deleniti at saepe amet ad facere
              </p>
            </div>
          </div>
          <Button title="All Services"/>
        </div>
      </section>
    </div>
  );
};

export default Services;
