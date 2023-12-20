import React from "react";
import { NavProfile, Sidebar, Footer, Dash, LapDash } from "../components";

export default function DashContent({ getUser }) {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full lg:px-[120px] px-10 shadow-lg shadow-slate-200 bg-white fixed z-[10]">
        <NavProfile user={getUser} />
      </div>
      <div className="flex flex-1 lg:justify-start justify-center items-start w-full min-h-screen h-auto mt-[100px] lg:px-[120px] px-10 py-10 bg-gradient-to-b from-white from-5% via-blue-500/[0.4] to-white to-95%">
        <div className="lg:mx-5 mx-0 self-start">
          <Sidebar content={1} />
        </div>
        <div className="lg:mx-1 mx-0 h-auto">
          <Dash user={getUser} />
        </div>
      </div>
      {/* Laporan Dashboard*/}
      <div className="w-full h-auto">
        <LapDash />
      </div>
      {/* Footer */}
      <div className="w-full h-auto">
        <Footer />
      </div>
    </div>
  );
}
