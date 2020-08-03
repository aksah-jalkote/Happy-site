import React from 'react';
import "../core/style.css"
import "./components.css";

const Social = () => {
  return (
    <div>
      <section id="social">
        <div class="container">
          <div class="row text-white">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <h2 class="text-center pb-4">Follow Us on Social media</h2>
              <ul class="list-unstyled list-inline social text-center ">
                <li class="list-inline-item">
                  <a>
                    <i class="fa fa-facebook fas"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a>
                    <i class="fa fa-twitter fas"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a>
                    <i class="fa fa-instagram fas"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
