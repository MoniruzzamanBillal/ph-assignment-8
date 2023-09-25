import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardComponent = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("cardData.json");
      const responseData = await response.json();

      setDatas(responseData);
    };

    getData();
  }, []);

  return (
    <div className="cardContainer  mb-4 ">
      <div className="cardWrapper  w-[95%] sm:w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 ">
        {/*  */}
        {datas.map((ele, ind) => (
          <div key={ind} className="cardContainer  m-auto ">
            <Card ele={ele} />
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default CardComponent;
