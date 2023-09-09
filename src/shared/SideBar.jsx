import React from "react";
// import { IoLogoDesignernews } from "react-icons";
import { DiCodeigniter } from "react-icons/di";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";
import NavLink from "../components/NavLink";
const SideBar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3">
      <div className="flex items-center px-1 py-3  gap-2">
        <DiCodeigniter fontSize={28} color="white" />
        <span className="text-white font-bold">Chinos DashBoard</span>
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => {
          //   <NavLink item={item} />;{item}
          return <NavLink key={item.key} item={item} />;
        })}
      </div>
      <div className="">Bottom part</div>
    </div>
  );
};

export default SideBar;
