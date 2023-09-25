import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getDonatedId, saveDonateId } from "../utility/LocalStorage";

const Details = () => {
  const [userData, setUserData] = useState([]);
  const responseData = useLoaderData();
  const response = useParams();
  const dataId = parseInt(response.id);

  // console.log(dataId);

  //   console.log(responseData);

  useEffect(() => {
    const filterData = () => {
      //   console.log(responseData);
      const desiredData = responseData.find((ele) => ele.id === dataId);

      //   console.log(desiredData);

      const newArray = [desiredData];

      setUserData(newArray);
    };

    filterData();
  }, []);

  const handleDonate = (selectedId) => {
    const previousIds = getDonatedId();

    const isExist = previousIds.find((id) => id === selectedId);

    if (isExist) {
      return alert("Item already exist");
    }

    saveDonateId(selectedId);
  };

  return (
    <div className="detailsContainer  my-3  ">
      <div className="detailsWrapper  m-auto w-[95%] md:w-[90%] ">
        {/*  */}

        {userData &&
          userData.map((ele, ind) => (
            <div className="body " key={ind}>
              <div className="imgContainer h-[16rem] sm:h-[21rem] md:h-[25rem] lg:h-[30rem] relative ">
                <img
                  className="rounded-t-lg w-full h-full bg-cover "
                  src={ele.Picture}
                  alt=""
                />
                {/*  */}
                <div className="absolute top-[12rem] sm:top-[17rem] md:top-[21rem] lg:top-[26rem] left-[0rem] inset-0 bg-gray-800 opacity-60  h-[4rem] "></div>
                {/*  */}
                <div className="buttonContainer w-full inset-0 py-2 absolute top-[12rem] sm:top-[17rem] md:top-[21rem] lg:top-[26rem] left-[0rem] text-white h-[4rem] flex items-center p-3 sm:p-6 ">
                  <button
                    className=" bg-red-500 py-1.5 sm:py-2 px-3 sm:px-5 font-semibold rounded text-sm sm:text-base active:scale-95 "
                    onClick={() => handleDonate(ele.id)}
                    style={{ backgroundColor: ele.TextColor }}
                  >
                    Donate ${ele.money}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 ">
                  {ele.Title}
                </h5>

                <p className="mb-3 font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400">
                  {ele.Description}
                </p>
              </div>
            </div>
          ))}

        {/*  */}
      </div>
    </div>
  );
};

export default Details;
