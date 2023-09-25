import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonatedId } from "../utility/LocalStorage";
import DonationCard from "../Components/DonationCard";

const Donation = () => {
  const [toggle, setToggle] = useState(false);
  const [size, setSize] = useState(4);
  const [donatedData, setDonatedData] = useState([]);

  const responseData = useLoaderData();

  const previousDonateId = getDonatedId();

  const handleSeeMore = () => {
    console.log(toggle);
    setSize(donatedData.length);
    setToggle(true);
  };

  useEffect(() => {
    const selectedData = responseData.filter((ele) =>
      previousDonateId.includes(ele.id)
    );

    setDonatedData(selectedData);
  }, []);

  return (
    <div className="donationContainer   mt-4 mb-6">
      <div className="donationWrapper  m-auto w-[95%] sm:w-[90%] grid grid-cols-2 gap-x-2 gap-y-3 ">
        {/* donation card container  */}

        {donatedData.slice(0, size).map((ele, ind) => (
          <DonationCard ele={ele} key={ind} />
        ))}

        {/* donation card container  */}
      </div>

      {/* see more button  */}
      <div
        className={` seeMore mt-6 m-auto  text-center ${
          donatedData.length > 4 ? "block" : "hidden"
        }  ${toggle ? "hidden" : "block"} `}
      >
        <button
          className={` bg-lime-500 py-2 px-6 rounded text-white font-semibold hover:shadow hover:bg-lime-600 active:scale-95 active:shadow-md `}
          onClick={() => handleSeeMore()}
        >
          See All
        </button>
      </div>
      {/* see more button  */}
    </div>
  );
};

export default Donation;
