import React from "react";

const Banner = () => {
  return (
    <div className="bannerCOntainer">
      <div className="bannerWrapper">
        {/*  */}
        {/* overlay banner  */}

        <div className="relative w-full h-full mx-auto ">
          <img
            className="h-[30rem] w-full object-cover rounded-md"
            src="https://cac-website-media.s3.amazonaws.com/wp-content/uploads/2021/06/28070846/shutterstock_1672780255_compress.jpg"
            alt="Random image"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center  ">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center">
              I Grow By Helping People In Need
            </h2>

            {/* input section  */}
            <div className="inputSection flex justify-between  mt-4 rounded bg-white pl-2 w-[54%] sm:w-[44%] md:w-[38%] lg:w-[29%]  ">
              <input
                type="text"
                placeholder="Search Here..."
                className=" border-none outline-none w-[71%] text-sm sm:text-base  "
              />
              <button className=" w-[29%] bg-red-600 py-1 sm:py-2 px-2 sm:px-3 md:px-5 font-semibold text-white rounded-r text-sm sm:text-base ">
                Search
              </button>
            </div>
            {/* input section  */}
          </div>
        </div>

        {/* overlay banner  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Banner;
