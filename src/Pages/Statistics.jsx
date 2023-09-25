import React from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getDonatedId } from "../utility/LocalStorage";

const Statistics = () => {
  const responseData = useLoaderData();

  const donatedData = getDonatedId();

  const totalLength = responseData.length;
  const totalDonated = donatedData.length;

  const data = [
    ["Task", "Hours per Day"],
    ["Total Donation", totalLength],
    ["My Donation", totalDonated],
  ];

  return (
    <div className="statisticsContainer  ">
      <div className="statisticsWrapper  w-[95%] sm:w-[90%] m-auto ">
        <Chart
          chartType="PieChart"
          data={data}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default Statistics;
