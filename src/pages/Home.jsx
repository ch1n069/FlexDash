import React from "react";
import DashBoardStats from "../components/DashBoardStats";
import Chart from "../components/Chart";
import BuyerProfilePieChart from "../components/BuyerProfileChart";

const Home = () => {
  return (
    <div className="flex flex-col">
      <DashBoardStats />
      <div className="flex flex-grow w-full g-4 ">
        <Chart />
        <BuyerProfilePieChart />
      </div>
    </div>
  );
};

export default Home;
