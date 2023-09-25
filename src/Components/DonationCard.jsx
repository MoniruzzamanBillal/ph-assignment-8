import React from "react";

const DonationCard = ({ ele }) => {
  const { Category, Title, money, CardBg, ButtonBg, TextColor, Picture } = ele;

  return (
    <div className="donationCardContainer m-auto  w-[34rem] ">
      <div className="donationCardWrapper">
        {/* card container  */}

        <div
          class="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
          style={{ backgroundColor: CardBg }}
        >
          <img
            class="object-cover h-[11rem] w-full rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg"
            src={Picture}
            alt=""
          />
          <div class="flex flex-col justify-between  leading-normal pl-4 ">
            {/* top category  */}
            <div className="topCategory py-2 ">
              <h5
                class=" inline text-xl font-bold tracking-tight text-gray-900 py-1.5 px-4  rounded "
                style={{ backgroundColor: ButtonBg, color: TextColor }}
              >
                {Category}
              </h5>
            </div>
            {/* top category  */}

            <p class="mb-1 text-gray-900 text-xl font-bold  ">{Title}</p>
            <p
              class="mb-1 text-gray-700 font-bold text-lg "
              style={{ color: TextColor }}
            >
              ${money}
            </p>

            <div className="buttonContainer ">
              <button
                className=" py-2 px-4 mb-2 font-bold text-white rounded  "
                style={{ backgroundColor: TextColor }}
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
