import React from "react";
import Nav from "../Components/Nav";
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CardComponent from "../Components/CardComponent";

const Home = () => {
  const cardData = useLoaderData();

  return (
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

        {/* card component  */}
        <div className="cardComponent">
          <CardComponent cardData={cardData} />
        </div>
        {/* card component  */}
      </div>
    </div>
  );
};

export default Home;
