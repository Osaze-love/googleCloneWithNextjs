import React from "react";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div className="flex items-center  w-full text-gray-700  justify-evenly text-sm lg:text-base lg:justify-start lg:pl-52 lg:space-x-36 border-b">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      <div className="flex space-x-4 ">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
