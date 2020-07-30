import React from "react";
// import "./style.css";

const Socialmedia = () => {
  return (
    <div className="container">
      <div className="row text-white">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item">
              <a>
                <i className="fa fa-facebook fas"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a>
                <i className="fa fa-twitter fas"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a>
                <i className="fa fa-instagram fas"></i>
              </a>
            </li>
            {/* <li className="list-inline-item">
              <a>
                <i className="fa fa-envelope fas"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
