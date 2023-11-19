import React from "react";
import { NavProfile, Sidebar, InputText } from "../components";

const Profile = () => {
  return (
    <div className="flex h-[850px]">
      <div className="w-full md:px-[120px] px-7 shadow-lg shadow-slate-300 bg-white fixed z-[10]">
        <div className="w-full">
          <NavProfile />
        </div>
      </div>
      <div className="flex">
        {/*  */}
        <div className="md:px-[100px] px-7 mt-[150px]">
          <div className="w-full">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
