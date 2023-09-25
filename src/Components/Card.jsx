import React from "react";

const Card = ({ ele }) => {
  // console.log(ele);

  const {
    id,
    ButtonBg,
    CardBg,
    Category,
    TitleText,
    Picture,
    TextColor,
    Title,
  } = ele;

  // console.log(id);

  return (
    <div className="cardData cursor-pointer hover:shadow-lg transform duration-300 hover:-translate-y-2">
      {/* card  */}

      <div
        class={`max-w-sm   border border-gray-200 rounded-lg shadow`}
        style={{ backgroundColor: CardBg }}
      >
        {/* card img  */}
        <div className="cardImg w-full ">
          <img className="rounded-t-lg" src={Picture} alt="" />
        </div>

        {/* card img  */}

        <div className="p-3">
          {/* card category  */}

          <div
            className={`cardCategory mb-3    inline-block py-1 px-3 rounded-md text-blue-800  font-semibold`}
            style={{ backgroundColor: ButtonBg, color: TextColor }}
          >
            <h1 className="  "> {Category} </h1>
          </div>
          {/* card category  */}

          {/* card title  */}
          <div
            className={`cardTitle  h-[4rem] flex items-center justify-start text-[${TitleText}] font-bold text-lg `}
            style={{ color: TextColor }}
          >
            <h1> {Title} </h1>
          </div>
          {/* card title  */}
        </div>
      </div>

      {/* card  */}
    </div>
  );
};

export default Card;
