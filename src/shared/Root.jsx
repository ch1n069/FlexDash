import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";
import SideBar from "./SideBar";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";
import NavLink from "../components/NavLink";
import Header from "../components/Header";

const Root = () => {
  return (
    <div className="flex flex-row bg-neutral-100 w-screen h-screen">
      <Fragment>
        <SideBar />
        <div className="flex-1">
          <Header />
          <div>
            <Outlet />
          </div>
        </div>

        {/* <DashBoard /> */}

        {/* <Outlet /> */}
      </Fragment>
    </div>
  );
};

export default Root;
