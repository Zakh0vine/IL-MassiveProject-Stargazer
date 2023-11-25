import { NavProfile, Sidebar, ProfileForm, Footer } from "../components";

const Profile = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full lg:px-[120px] px-10 shadow-lg shadow-slate-200 bg-white fixed z-[10]">
        <NavProfile />
      </div>

      <div className="flex lg:justify-start justify-center items-start w-full min-h-screen h-auto my-[100px] lg:px-[120px] px-10 py-1">
        <div className="lg:mx-10 mx-0 self-start ">
          <Sidebar content={0} />
        </div>
        <div className="lg:mx-10 mx-0 mt-8 h-auto ">
          <ProfileForm />
        </div>
      </div>
      {/* Footer */}
      <div className="w-full h-auto">
        <Footer />
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
