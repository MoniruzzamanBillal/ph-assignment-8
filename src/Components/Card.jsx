import React from "react";

const Card = () => {
  return (
    <div className="cardData  ">
      {/* card  */}

      <div class="max-w-sm bg-blue-200 border border-gray-200 rounded-lg shadow  ">
        {/* card img  */}
        <div className="cardImg">
          <img
            class="rounded-t-lg"
            src="../../public/images/Health.png"
            alt=""
            className=" w-full "
          />
        </div>

        {/* card img  */}

        <div class="p-3">
          {/* card category  */}
          <div className="cardCategory mb-3 bg-blue-300 inline-block py-1 px-3 rounded-md text-blue-800 font-semibold ">
            <h1 className="  ">Health</h1>
          </div>
          {/* card category  */}

          {/* card title  */}
          <div className="cardTitle text-blue-600 font-bold text-xl  ">
            <h1>Clean water for children </h1>
          </div>
          {/* card title  */}
        </div>
      </div>

      {/* card  */}
    </div>
  );
};

export default Card;
