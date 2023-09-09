import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";

const Root = () => {
  return (
    <Fragment>
      <DashBoard />
      <Outlet />
    </Fragment>
  );
};

export default Root;
