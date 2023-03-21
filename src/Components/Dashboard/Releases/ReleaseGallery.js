import React from "react";
import MusicCard from "./MusicCard";

function ReleaseGallery() {
  return (
    <>
      <div>
        <p className="text-2xl pb-3">New Releases</p>
        <div className="flex flex-row">
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </div>
    </>
  );
}

export default ReleaseGallery;
