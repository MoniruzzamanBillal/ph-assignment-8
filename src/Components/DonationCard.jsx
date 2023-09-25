import React from "react";
import { useNavigate } from "react-router-dom";

const DonationCard = ({ ele }) => {
  const { Category, Title, money, CardBg, ButtonBg, TextColor, Picture, id } =
    ele;

  const navigate = useNavigate();

  const handleSeeMore = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="donationCardContainer m-auto  w-[100%] ">
      <div className="donationCardWrapper  ">
        {/* card container  */}

        <div
          class="flex flex-row items-center w-[100%] md:w-[74%] lg:w-full  border border-gray-200 rounded-lg shadow  hover:bg-gray-100 m-auto "
          style={{ backgroundColor: CardBg }}
        >
          <img
            class="object-cover h-[8rem] sm:h-[10rem] md:h-[11rem] rounded-t-lg w-48 md:rounded-none md:rounded-l-lg"
            src={Picture}
            alt=""
          />
          <div class="flex flex-col justify-between  leading-normal pl-4 ">
            {/* top category  */}
            <div className="topCategory py-2 ">
              <h5
                class=" inline text-sm sm:text-xl font-bold tracking-tight text-gray-900 py-1.5 px-4  rounded  "
                style={{ backgroundColor: ButtonBg, color: TextColor }}
              >
                {Category}
              </h5>
            </div>
            {/* top category  */}

            <p class="mb-1 text-gray-900 text-sm sm:text-xl font-bold  ">
              {Title}
            </p>
            <p
              class="mb-1 text-gray-700 font-bold text-sm sm:text-lg  "
              style={{ color: TextColor }}
            >
              ${money}
            </p>

            <div className="buttonContainer ">
              <button
                className=" py-1.5 sm:py-2 px-3 sm:px-4 mb-2 font-bold text-white rounded text-sm sm:text-base  "
                style={{ backgroundColor: TextColor }}
                onClick={() => handleSeeMore(id)}
              >
                See Details
              </button>
            </div>
          </div>
        </div>

        {/* card container  */}
      </div>
    </div>
  );
};

export default DonationCard;
