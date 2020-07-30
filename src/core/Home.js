import React from "react";
import Menu from "./Menu";
import Banner from "./Banner";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";
import Social from "../components/Social";


const Home = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <Services />
      <Social/>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
