import React from "react";
import cardimg1 from "../../../Media/cardimg1.png";

function MusicCard() {
  return (
    <>
      <div className="flex flex-col pr-6">
        <div className="rounded-[25px]">
          <img
            src={cardimg1}
            alt="cardimg1"
            className="h-[13em] w-[13em]"
          ></img>
        </div>
        <div className="pt-2">
          <p>Life in a bubble</p>
        </div>
      </div>
    </>
  );
}

export default MusicCard;
