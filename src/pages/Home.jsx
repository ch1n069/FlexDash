import React from "react";
import DashBoardStats from "../components/DashBoardStats";
import Chart from "../components/Chart";

const Home = () => {
  return (
    <div className="flex flex-col">
      <DashBoardStats />
      <Chart />
    </div>
  );
};

export default Home;
