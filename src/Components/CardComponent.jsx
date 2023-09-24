import React from "react";
import Card from "./Card";

const CardComponent = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="cardContainer bg-red-300 mb-4 ">
      <div className="cardWrapper bg-lime-300 w-[95%] sm:w-[90%] m-auto ">
        <Card />
      </div>
    </div>
  );
};

export default CardComponent;
