import React from "react";
import logo from "../../Media/logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdFeaturedPlayList } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { IoExitSharp } from "react-icons/io5";
import { FiRadio } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";

const sidebar_elements =
  "py-5 px-4 text-[#efeee0] opacity-20  hover:opacity-100 hover:text-[#FACD66] rounded-[2em]";

function Sidenav() {
  return (
    <>
      <div className="flex flex-col pl-4">
        {/* Logo */}
        <div className="flex justify-center items-center h-20">
          <img src={logo} alt="Spotify Logo" className="h-10" />
        </div>
        <div className="bg-[#1A1E1F] flex justify-center rounded-t-[2em] rounded-b-[2em] py-2 mb-4">
          <ul>
            <li className={sidebar_elements}>
              <AiFillHome size={26} />
            </li>
            <li className={sidebar_elements}>
              <MdFeaturedPlayList size={26} />
            </li>
            <li className={sidebar_elements}>
              <FiRadio size={26} />
            </li>
            <li className={sidebar_elements}>
              <FaVideo size={26} />
            </li>
          </ul>
        </div>
        <div className="bg-[#1A1E1F] flex justify-center rounded-t-[2em] rounded-b-[2em] py-2 ">
          <ul>
            <li className={sidebar_elements}>
              <BsFillPersonFill size={26} />
            </li>
            <li className={sidebar_elements}>
              <IoExitSharp size={26} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
