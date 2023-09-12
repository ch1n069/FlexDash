import React from "react";
import { BsBag } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineArrowUp } from "react-icons/ai";

import { GrTransaction } from "react-icons/gr";

const DashBoardStats = () => {
  return (
    <div className="flex gap-4 w-full p-3">
      <BoxWrapper>
        {/* will hold the icon */}
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-400">
          <BsBag
            // siz={24}
            className="text-2xl text-white items-center"
          />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="">
            <strong className="text-xl text-gray-900 font-semibold">
              $500.60
            </strong>
            <span className="text-green-500 text-sm pl-2">+234</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        {/* will hold the icon */}
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple-400">
          <TbTruckDelivery
            // siz={24}
            className="text-2xl text-white items-center"
          />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Orders</span>
          <div className="">
            <strong className="text-xl text-gray-900 font-semibold">150</strong>
            <span className="text-red-600 text-sm pl-2"> -50</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        {/* will hold the icon */}
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-400">
          <BsBag
            // siz={24}
            className="text-2xl text-white items-center"
          />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="">
            <strong className="text-xl text-gray-900 font-semibold">
              $500.60
            </strong>
            <span className="text-green-500 text-sm pl-2">+234</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        {/* will hold the icon */}
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-400">
          <BsBag
            // siz={24}
            className="text-2xl text-white items-center"
          />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="">
            <strong className="text-xl text-gray-900 font-semibold">
              $500.60
            </strong>
            <span className="text-green-500 text-sm pl-2">+234</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashBoardStats;

function BoxWrapper({ children }) {
  return <div className="bg-white flex-1 p-4 rounded-sm flex">{children}</div>;
}
