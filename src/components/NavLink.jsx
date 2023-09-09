import React from "react";
import { Link } from "react-router-dom";

const NavLink = (item) => {
  return (
    <div>
      <Link>
        {/* this will hold the logo */}
        <span></span>
        {item.label}
      </Link>
    </div>
  );
};

export default NavLink;
