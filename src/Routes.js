import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Home from "./core/Home";
import Contact from "./contact/Contact";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
