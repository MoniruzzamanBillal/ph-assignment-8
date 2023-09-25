import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import { AppProvider, GlobalContext } from "../utility/Context";

const Root = () => {
  return (
    <>
      {/* nav component  */}
      <Nav />
      {/* nav component  */}

      {/*  */}
      <AppProvider>
        {/* body component  */}
        <Outlet />
        {/* body component  */}
      </AppProvider>
    </>
  );
};

export default Root;
