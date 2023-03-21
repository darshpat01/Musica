import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import BigCard from "./BigCard";
import TopChart from "./TopChart";
import ReleaseGallery from "./Releases/ReleaseGallery";

function Dashboard() {
  return (
    <div className="h-[100vh] pl-6 text-white overflow-scroll">
      <div className="py-4">
        <div className="flex items-center">
          <div className="pr-4">
            <AiOutlineSearch size={26} className="text-[#efeee0] opacity-20" />
          </div>
          <Input variant="unstyled" placeholder="Search" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-none basis-[55%]">
          <BigCard />
        </div>
        <div className="flex-none basis-[45%]">
          <TopChart />
        </div>
      </div>
      <div className="pt-8">
        <ReleaseGallery />
        <ReleaseGallery />
      </div>
    </div>
  );
}

export default Dashboard;
