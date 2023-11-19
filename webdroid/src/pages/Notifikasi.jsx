import React from "react";
import { Sidebar, NavProfile, BoxNotif } from "../components";

export default function Notifikasi() {
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
          <BoxNotif />
        </div>
      </div>
    </div>
  );
}
