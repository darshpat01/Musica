import React from "react";
import chart1 from "../../Media/chart1.png";
import { AiOutlineHeart } from "react-icons/ai";

function MiniChart() {
  return (
    <>
      <div className="flex bg-[#1A1E1F] p-4 rounded-[20px] mt-3 items-center">
        <div className="rounded-[3em]">
          <img src={chart1} alt="logo"></img>
        </div>
        <div>
          <div className="text-xl pl-4">
            <p>Golden age of 80s</p>
          </div>
          <div className="text-md pl-4">
            <p>Sean swadder</p>
          </div>
          <div className="text-md pl-4">
            <p>2:34:45</p>
          </div>
        </div>
        <div className="ml-auto rounded-full p-2 border border-white text-[#FACD66] opacity-20 hover:opacity-80">
          <AiOutlineHeart size={26} />
        </div>
      </div>
    </>
  );
}

export default MiniChart;
