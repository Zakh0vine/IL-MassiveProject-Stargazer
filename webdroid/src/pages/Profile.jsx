import React from "react";
import { NavProfile, Sidebar, ProfileForm } from "../components";

const Profile = () => {
  return (
    <div className="flex">
      <div className="w-full px-[70px] shadow-lg shadow-slate-300 bg-white fixed z-[10]">
        <div className="w-full">
          <NavProfile />
        </div>
      </div>
      <div className="flex justify-center w-full my-[130px] px-[70px] py-3">
        <div className="w-full flex mx-5 gap-[60px]">
          <Sidebar />
        </div>
        <div className="w-full">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;
