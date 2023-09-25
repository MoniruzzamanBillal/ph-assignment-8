import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Root = () => {
  return (
    <>
      {/* nav component  */}
      <Nav />
      {/* nav component  */}

      {/*  */}

      {/* body component  */}
      <Outlet />
      {/* body component  */}
    </>
  );
};

export default Root;
