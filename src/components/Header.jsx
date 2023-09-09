import React from "react";
import { Menu } from "@headlessui/react";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-white h-18 px-8 py-4 flex justify-between ">
      <div className="relative">
        <BiSearch
          className="left-2 absolute text-gray-400 top-1/2 -translate-y-1/2"
          size={20}
        />
        <input
          className="text-sm  pr-2 pl-8 focus:outline-none border h-10 w-[24rem] border-gray-300 rounded-sm"
          placeholder="search"
          type="search"
        />
      </div>
      <div>icons</div>
    </div>
  );
};

export default Header;
