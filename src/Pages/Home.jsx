import React from "react";
import Nav from "../Components/Nav";
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";

const Home = () => (
  <div className="homeContainer">
    <div className="homeWrapper">
      {/* nav component  */}
      <div className="navComponent">
        <Nav />
      </div>
      {/* nav component  */}

      {/* banner component */}
      <Banner />
      {/* banner component */}
    </div>
  </div>
);

export default Home;
