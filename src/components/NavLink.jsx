import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const NavLink = ({ item }) => {
  // GET THE current route
  const { pathname } = useLocation();
  //   alert(pathname);
  console.log(pathname);
  const linkClass =
    "flex items-center gap-2 font-light px-3 py-2 hover:bg-red-400  active:bg-neutral-600 rounded-sm text-base";
  return (
    <div className="items-center py-1">
      <Link
        to={item.path}
        className={classNames(
          pathname === item.path ? "bg-red-400" : "text-neutral-400",
          linkClass
        )}
      >
        {/* this will hold the logo */}
        <span className="text-white">{item.icon}</span>
        <span className="text-white">{item.label}</span>
      </Link>
    </div>
  );
};

export default NavLink;
