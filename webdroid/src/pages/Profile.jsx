import React from "react";
import { NavProfile } from "../components";

const Profile = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full md:px-[120px] px-7 bg-white fixed z-[10]">
        <div className="w-full">
          <NavProfile />
        </div>
      </div>
    </div>
  );
};
