import { useState } from "react";
import { logo, profile, notif } from "../assets";

const NavProfile = () => {
  const [Profile, setProfile] = useState(false);

  return (
    <nav className="w-full flex py-3 items-center navbar flex-1 justify-between">
      <img src={logo} alt="logo" className="w-[80px] h-[55px] cursor-pointer flex justify-start" />

      <ul className="list-none flex justify-end items-center flex-1">
        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] sm:mr-[65px] mr-[30px]`}>
          <a href="#" className={`border-b-2 ${Profile ? "border-none" : "border-b-[#5d6af8] text-[#5d6af8]"}`} onClick={() => setProfile(false)}>
            Beranda
          </a>
        </li>
        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] sm:mr-[65px] mr-[30px]`}>
          <a href="#">
            <img src={notif} alt="notif" />
          </a>
        </li>
        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] sm:mr-[65px] mr-[30px]`}>
          <a href="#">
            <img src={profile} alt="profile" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavProfile;
