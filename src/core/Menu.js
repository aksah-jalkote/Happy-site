import React from "react";
import "./style.css";


const Menu = () => {
  
  return (
    <div>
      <section id="nav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand text-white" href="">
            Zero Day Sec
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TOOLS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Menu;
