import React from 'react';
import "./components.css";

const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="row ">
        <div className="col-md-6 offset-sm-3 text-left">
        <h3 className="text-center">Subscribe Us</h3>
          <form>
            <div className="form-group">
              <label className="">E-Mail</label>
              <input className="form-control" placeholder="E-mail" type="emial" />
            </div>
          </form>
          <div>
            <button className="btn btn-block btn-dark rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
