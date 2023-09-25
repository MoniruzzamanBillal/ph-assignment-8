import React from "react";

const Details = () => {
  return (
    <div className="detailsContainer  my-3  ">
      <div className="detailsWrapper  m-auto w-[95%] md:w-[90%] ">
        {/*  */}

        <div className="body">
          <div className="imgContainer h-[16rem] sm:h-[21rem] md:h-[25rem] lg:h-[30rem]  ">
            <img
              className="rounded-t-lg w-full h-full bg-cover "
              src="../../public/images/Rectangle 4288.png"
              alt=""
            />
          </div>

          <div className="pt-2">
            <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 ">
              Good Education
            </h5>

            <p className="mb-3 font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400">
              There are many things that can be done to ensure that all people
              have access to a good education. Governments can invest in public
              schools, provide financial assistance to students, and make sure
              that all schools have qualified teachers and resources. Families
              can support their children's education by creating a learning
              environment at home and helping them with their schoolwork.
              Teachers can create a positive and supportive learning environment
              for their students and challenge them to reach their full
              potential.
            </p>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Details;
