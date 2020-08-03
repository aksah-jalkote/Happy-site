import React from "react";
import "../core/style.css"
import img1 from "../core/images/img1.jpg"
const Main = () => {
  return (
    <div id="Contactme">
          <div class="row">
            <div class="col-md-6 offset-sm-3 p-5 text-left">
              <h1 className="display text-center">Fill this form</h1>
              <form action="" class="mt-5">
                <div class="form-group">
                  <label for="" class="text-dark">
                    Name
                  </label>
                  <input type="text" placeholder="Name" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="" class="text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="" class="text-dark">
                    Mobile No.
                  </label>
                  <input
                    type="tel"
                    placeholder="Mobile No"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="" class="text-dark">
                    Description
                  </label>
                  <textarea class="form-control" rows="4"></textarea>
                </div>
                <div>
                  <button
                    class="btn btn-md btn-primary btn-block"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    
  );
};

export default Main;
