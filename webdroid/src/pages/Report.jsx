import { ContentReport, NavProfile, Sidebar, Footer } from "../components";

const Report = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full lg:px-[120px] px-10 shadow-lg shadow-slate-200 bg-white fixed z-[10]">
        <NavProfile />
      </div>

      <div className="flex flex-1 lg:justify-start justify-center items-start w-full min-h-screen h-auto my-[100px] lg:px-[120px] px-10 py-10">
        <div className="lg:mx-5 mx-0 self-start">
          <Sidebar content={2} />
        </div>
        <div className="lg:mx-10 mx-0">
          <ContentReport />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Report;
