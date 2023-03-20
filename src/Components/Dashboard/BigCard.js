import React from "react";
import dps from "../../Media/dps.png";
import { AiFillHeart } from "react-icons/ai";

function BigCard() {
  return (
    <>
      <div className="flex-auto text-white  bg-[#609EAF] rounded-[3em] z-100">
        <div className="bg-vector bg-right bg-contain bg-no-repeat z-101 rounded-[3em] ">
          <div className="bg-person bg-right bg-contain bg-no-repeat z-102 p-5">
            <div className="w-[20em] pl-6">
              <div className="text-sm pb-[7em] pt-4">
                <p>Currated playlist</p>
              </div>
              <div className="text-6xl font-bold">
                <p>R & B Hits</p>
              </div>
              <div className="text-sm pt-6">
                <p className="w-[15em]">
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
                </p>
              </div>
              <div className="flex pt-[4em]">
                <img src={dps} alt="logo" className="h-6"></img>
                <div className="pl-4">
                  <AiFillHeart size={26} />
                </div>
                <div className="pl-4">
                  <p>33K Likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCard;
