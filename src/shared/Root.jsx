import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";
import SideBar from "./SideBar";

const Root = () => {
  return (
    <div className="flex flex-row bg-neutral-100 w-screen h-screen">
      <Fragment>
        <SideBar />
        {/* <DashBoard /> */}
        <Outlet />
      </Fragment>
    </div>
  );
};

export default Root;
