import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonatedId } from "../utility/LocalStorage";

const Donation = () => {
  const [donatedData, setDonatedData] = useState([]);

  const responseData = useLoaderData();

  const previousDonateId = getDonatedId();

  //   console.log(previousDonateId);

  //   console.log(responseData);

  useEffect(() => {
    const selectedData = responseData.filter((ele) =>
      previousDonateId.includes(ele.id)
    );

    console.log(selectedData);

    // getSavedJobs(selectedData);

    setDonatedData(selectedData);
  }, []);

  return (
    <div className="donationContainer  bg-red-300">
      <div className="donationWrapper bg-blue-200 m-auto w-[95%] sm:w-[90%] ">
        <h1>donation length : {donatedData.length} </h1>
        <h1>donation page </h1>
        <h1>donation page </h1>
        <h1>donation page </h1>
        <h1>donation page </h1>
      </div>
    </div>
  );
};

export default Donation;
