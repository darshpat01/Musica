import React from "react";
import MiniChart from "./MiniChart";

function TopChart() {
  return (
    <>
      <div className="flex-none pl-[3em] pr-[7em]">
        <div>
          <p className="text-2xl font-bold">Top Chart</p>
          <div>
            <MiniChart />
            <MiniChart />
            <MiniChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopChart;
