import React from "react";
import playerdp from "../../Media/playerdp3.png";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { AiFillSound } from "react-icons/ai";
import {
  AiFillPlayCircle,
  AiFillStepBackward,
  AiFillStepForward,
} from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { BsRepeat } from "react-icons/bs";

function Player() {
  return (
    <div className="w-full h-[6em] drop-shadow-2xl backdrop-blur-md text-white px-[8em] flex flex-row items-center justify-between">
      <div className="flex w-full items-center">
        <div className="rounded-[14px] overflow-hidden h-11 w-11">
          <img src={playerdp} alt="dp"></img>
        </div>
        <div className="pl-3 flex-col">
          <div>
            <p>Seasons in</p>
          </div>
          <div className="text-sm opacity-40">
            <p>James</p>
          </div>
        </div>
        <div className="flex-col ml-auto mr-auto">
          <div className="flex justify-center">
            <div className="pr-5 hover:text-[#FACD66]">
              <FaRandom size={26} />
            </div>
            <div className="pr-5 hover:text-[#FACD66]">
              <AiFillStepBackward size={26} />
            </div>

            <div className="pr-5 hover:text-[#FACD66]">
              <AiFillPlayCircle size={28} />
            </div>
            <div className="pr-5 hover:text-[#FACD66]">
              <AiFillStepForward size={26} />
            </div>
            <div className=" hover:text-[#FACD66]">
              <BsRepeat size={26} />
            </div>
          </div>
          <div className="pt-1">
            <Slider
              aria-label="slider-ex-1"
              defaultValue={60}
              min={0}
              max={300}
              step={30}
              width="600px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pr-2">
            <AiFillSound />
          </div>
          <div>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={60}
              min={0}
              max={300}
              step={30}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
