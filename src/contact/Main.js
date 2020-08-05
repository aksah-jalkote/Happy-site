import React from 'react';
import './contact.css';
import photu from "./photu.svg"

const Main = () => {
  return (
    <div id="Contactme">
      <form action="" class="mt-5">
        <h1>Fill this Form</h1>
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
          <input type="email" placeholder="Email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="" class="text-dark">
            Mobile No.
          </label>
          <input type="tel" placeholder="Mobile No" class="form-control" />
        </div>
        <div class="form-group">
          <label for="" class="text-dark">
            Description
          </label>
          <textarea class="form-control" rows="4"></textarea>
        </div>
        <div>
          <button class="btn btn-md btn-primary btn-block" type="submit">
            Submit
          </button>
        </div>
      </form>
      <img src={photu} className="img-fluid mt-5"/>
    </div>
  );
};

export default Main;
