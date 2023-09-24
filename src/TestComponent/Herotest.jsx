import React from "react";

const Herotest = () => {
  return (
    <>
      <div className="bannerCOntainer">
        <div className="bannerWrapper">
          {/*  */}
          {/* overlay banner  */}

          <div
            className="w-full bg-center bg-cover bg-no-repeat relative"
            style={{
              backgroundImage: `url('https://cac-website-media.s3.amazonaws.com/wp-content/uploads/2021/06/28070846/shutterstock_1672780255_compress.jpg')`,
            }}
          >
            {/* Overlay with reduced opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40"></div>

            <div className="flex items-center justify-center w-full h-full  py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    <span className="text-gray-200 font-semibold uppercase tracking-widest">
                      New feature
                    </span>
                    <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laborum sit cum iure qui, nostrum at sapiente ducimus.
                    </p>
                    <a
                      className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                      href="#"
                    >
                      start your free trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* overlay banner  */}
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Herotest;

<>
  <div class="meetContainer mb-6">
    <div class="meetWrapper w-90 m-auto">
      <div
        class="hero min-h-screen rounded-md overflow-hidden bg-cover bg-center relative"
        style="background-image: url(images/team.png)"
      >
        <div class="hero-overlay bg-opacity-70"></div>
        <div class="hero-content text-center text-neutral-content relative">
          <div class="bgContent">
            <div class="meetTop mb-6 md:mb-10 text-white">
              <div class="meetTopHead mb-6">
                <h1 class="text-4xl font-bold text-center">Meet the team</h1>
              </div>
              <div class="meetTopPara w-60 m-auto">
                <p class="text-center text-base">
                  Contrary to popular belief, is not simply random text. It has
                  roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old.
                </p>
              </div>
            </div>
            <div class="meetBottom">
              <div class="meetBottomCard flex flex-col items-center md:flex-row md:justify-center">
                <div class="cardContainer py-4 px-2 w-60 sm:w-48 md:w-22 text-white flex justify-center items-center flex-col card1">
                  <div class="meetCardImg w-26 mb-1">
                    <img src="images/member1.png" class="w-full" alt="" />
                  </div>
                  <div class="meetCardName">
                    <p>Awlad Hossain</p>
                  </div>
                  <div class="meetCardDesignation mb-1">
                    <p class="text-sm">Fruits Expert</p>
                  </div>
                  <div class="meetLinks text-orange-600 w-32 md:w-49 lg:w-35 flex justify-between items-center text-sm sm:text-xl">
                    <i class="fa-brands fa-facebook cursor-pointer"></i>
                    <i class="fa-brands fa-twitter cursor-pointer"></i>
                    <i class="fa-brands fa-linkedin cursor-pointer"></i>
                  </div>
                </div>
                <div class="cardContainer py-4 px-2 w-60 sm:w-48 md:w-22 text-white flex justify-center items-center flex-col card2">
                  <div class="meetCardImg w-26 mb-1">
                    <img src="images/member2.png" class="w-full" alt="" />
                  </div>
                  <div class="meetCardName">
                    <p>Safia Chowdhury</p>
                  </div>
                  <div class="meetCardDesignation mb-1">
                    <p class="text-sm">Fruits Expert</p>
                  </div>
                  <div class="meetLinks text-orange-600 w-32 md:w-49 lg:w-35 flex justify-between items-center text-sm sm:text-xl">
                    <i class="fa-brands fa-facebook cursor-pointer"></i>
                    <i class="fa-brands fa-twitter cursor-pointer"></i>
                    <i class="fa-brands fa-linkedin cursor-pointer"></i>
                  </div>
                </div>
                <div class="cardContainer py-4 px-2 w-60 sm:w-48 md:w-22 text-white flex justify-center items-center flex-col card3">
                  <div class="meetCardImg w-26 mb-1">
                    <img src="images/member3.png" class="w-full" alt="" />
                  </div>
                  <div class="meetCardName">
                    <p>Rokib Hossain</p>
                  </div>
                  <div class="meetCardDesignation mb-1">
                    <p class="text-sm">Fruits Expert</p>
                  </div>
                  <div class="meetLinks text-orange-600 w-32 md:w-49 lg:w-35 flex justify-between items-center text-sm sm:text-xl">
                    <i class="fa-brands fa-facebook cursor-pointer"></i>
                    <i class="fa-brands fa-twitter cursor-pointer"></i>
                    <i class="fa-brands fa-linkedin cursor-pointer"></i>
                  </div>
                </div>
                <div class="cardContainer py-4 px-2 w-60 sm:w-48 md:w-22 text-white flex justify-center items-center flex-col card4">
                  <div class="meetCardImg w-26 mb-1">
                    <img src="images/member4.png" class="w-full" alt="" />
                  </div>
                  <div class="meetCardName">
                    <p>Chaity</p>
                  </div>
                  <div class="meetCardDesignation mb-1">
                    <p class="text-sm">Fruits Expert</p>
                  </div>
                  <div class="meetLinks text-orange-600 w-32 md:w-49 lg:w-35 flex justify-between items-center text-sm sm:text-xl">
                    <i class="fa-brands fa-facebook cursor-pointer"></i>
                    <i class="fa-brands fa-twitter cursor-pointer"></i>
                    <i class="fa-brands fa-linkedin cursor-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>;
