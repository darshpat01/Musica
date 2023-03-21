import React from "react";
import Sidenav from "../Components/SideNav/Sidenav";
import Player from "../Components/Player/Player";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="h-[100vh] relative ">
        <div className="flex bg-[#1D2123] z-200">
          <div>
            <Sidenav />
          </div>
          <div className="flex-auto">
            <Outlet />
          </div>
        </div>
        <div className="absolute bottom-0 z-201 w-screen">
          <Player />
        </div>
      </div>
    </>
  );
}

export default Root;
