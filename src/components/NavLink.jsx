import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ item }) => {
  const linkClass =
    "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
  return (
    <div className="items-center py-2">
      <Link to={item.path} className={linkClass}>
        {/* this will hold the logo */}
        <span className="text-white">{item.icon}</span>
        <span className="text-white">{item.label}</span>
      </Link>
    </div>
  );
};

export default NavLink;
