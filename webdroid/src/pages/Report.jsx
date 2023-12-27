import { ContentReport, NavProfile, Sidebar, Footer, LapTabIn, LapTabOut } from "../components";

const Report = ({ getUser }) => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full lg:px-[120px] px-10 shadow-lg shadow-slate-200 bg-white fixed z-[10]">
        <NavProfile user={getUser} />
      </div>

      <div className="flex flex-1 lg:justify-start justify-center items-start w-full min-h-[80vh] h-auto my-[100px] lg:px-[120px] px-10 py-10 bg-gradient-to-b from-white from-5% via-blue-500/[0.4] to-white to-95%">
        <div className="lg:mx-5 mx-0 self-start">
          <Sidebar content={2} />
        </div>
        <div className="lg:mx-10 mx-0">
          <ContentReport />
        </div>
      </div>
      {/* Laporan Dashboard*/}
      <div className="w-full h-auto">
        <LapTabIn />
      </div>
      <div className="w-full h-auto">
        <LapTabOut />
      </div>
      {/* Footer */}
      <div className="w-full h-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Report;
