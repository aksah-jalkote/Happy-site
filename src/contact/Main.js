import React from "react";
import "../core/style.css"

const Main = () => {
  return (
    <div>
      <section id="Contactme">
        <div class="conteiner">
          <div class="row">
          <div class="col-md-6 text-center">
              <img src="images/contact.svg" class="img-fluid contactimage" />
            </div>
            <div class="col-lg-5  p-5">
              <h2 class="text-center display-4">Fill this form</h2>
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
      </section>
    </div>
  );
};

export default Main;
