import React from "react";

import { useLoaderData } from "react-router-dom";
import { getDonatedId } from "../utility/LocalStorage";
import { PieChart } from "@mui/x-charts/PieChart";

const Statistics = () => {
  const responseData = useLoaderData();

  const donatedData = getDonatedId();

  const totalLength = responseData.length;
  const totalDonated = donatedData.length;

  const donationPercentage = ((totalDonated * 100) / totalLength).toFixed(2);
  const remaining = 100 - donationPercentage;

  return (
    <div className="statisticsContainer  ">
      <div className="statisticsWrapper  w-[95%] sm:w-[90%] m-auto ">
        <div className="chartContainer  flex mt-6 ">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: donationPercentage, label: "My Donation" },
                  {
                    id: 1,
                    value: remaining,
                    label: "Total Donation",
                    color: "red",
                  },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;

{
  /* <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={400}
  height={200}
/> */
}
