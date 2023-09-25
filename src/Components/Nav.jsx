import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { RiMenu3Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

// nav links
const navLinks = [
  {
    href: "/",
    element: "Home",
  },
  {
    href: "/details",
    element: "Donation",
  },
  {
    href: "/",
    element: "Statistics",
  },
];

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navContainer bg-gray-100 shadow  py-1    ">
      <div className="navWrapper w-[95%] sm:w-[90%] m-auto flex justify-between items-center ">
        {/*  */}

        {/* left side of nav  */}
        <div className="navLeft  ">
          {/* lav logo  */}
          <div className="navLogo  w-[70%] ">
            <Link to={"/"}>
              <img
                src="../../public/Logo.png"
                alt=""
                className=" w-full h-full "
              />
            </Link>
          </div>
          {/* lav logo  */}
        </div>
        {/* left side of nav  */}

        {/*  */}

        {/* right side of nav  */}
        <div className="navRight   ">
          {/* nav right link  */}
          <div className="navRightLink hidden sm:block ">
            <div className="navLinks">
              {navLinks.map((ele, ind) => (
                <NavLink
                  key={ind}
                  to={ele.href}
                  className={`  ${
                    navLinks.length - 1 === ind ? "mr-0" : "mr-8"
                  } text-lg text-color hover:text-blue-700  `}
                >
                  {ele.element}
                </NavLink>
              ))}
            </div>
          </div>
          {/* nav right link  */}

          {/* mobile menu  */}
          <div className="mobileMenu block sm:hidden relative  ">
            {/* mobile menu icon  */}

            <div className="menuIcon text-3xl   " onClick={() => toggleMenu()}>
              {toggle ? <GrClose /> : <RiMenu3Line />}
            </div>
            {/* mobile menu icon  */}

            {/* mobile menu link  */}
            <div
              className={` mobileMenu ${
                toggle ? "block" : "hidden"
              } w-[8rem] m-auto   absolute transform -translate-x-1/2 -translate-y-1/2 top-[5.7rem] -right-[4rem] z-20 `}
            >
              <div className="navLinks flex flex-col bg-gray-200 px-4 py-3 shadow-sm rounded-md ">
                {navLinks.map((ele, ind) => (
                  <NavLink
                    key={ind}
                    to={ele.href}
                    onClick={() => toggleMenu()}
                    className={`  ${
                      navLinks.length - 1 === ind ? "mb-0" : "mb-3"
                    } hover:text-blue-700 `}
                  >
                    {ele.element}
                  </NavLink>
                ))}
              </div>
            </div>
            {/* mobile menu link  */}
          </div>
          {/* mobile menu  */}
        </div>
        {/* right side of nav  */}
      </div>
    </div>
  );
};

export default Nav;
