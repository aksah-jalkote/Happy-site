import React from "react";
import "./components.css";

const Jumbotron = ({ title, description }) => {
  return (
    <div className="pt-5">
      <section id="Jumbotron">
        <div class="container text-center">
          <h1 class="display-4">{title}</h1>
          <p class="lead">{description}</p>
        </div>
      </section>
    </div>
  );
};

export default Jumbotron;

// Contact Us
// Contact us we are here for your security
