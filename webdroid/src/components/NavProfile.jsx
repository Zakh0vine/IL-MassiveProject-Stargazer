import { useState } from "react";
import { logo, profile, notif, menu, close } from "../assets";
import { sideNav } from '../constants';
import { Link } from "react-router-dom";
import axios from "axios";

const NavProfile = ({ user }) => {
  const [Profile, setProfile] = useState(false);
  const [toggle, settoggle] = useState(false);

  const handleLogout = () => {
    axios.get("http://localhost:4923/api/v1/logout")
      .then(res => {
        location.reload(true);
      }).catch(err => console.log(err));
  }

  return (
    <nav className="w-full flex py-3 items-center navbar flex-1 justify-between">

      <Link to="/">
        <img src={logo} alt="logo" className="w-[80px] h-[55px] cursor-pointer flex justify-start" />
      </Link>

      <ul className="list-none justify-end items-center flex-1 lg:flex hidden gap-9 ">
        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] `}>
          <a href="#" className={`border-b-2 ${Profile ? "border-none" : "border-b-[#5d6af8] text-[#5d6af8]"}`} onClick={() => setProfile(false)}>
            Beranda
          </a>
        </li>
        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] `}>
          <Link to="/notifikasi">
            <img src={notif} alt="notifikasi" />
          </Link>
        </li>
        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] `}>
          <Link to="/profile">
            {user.image === "" || user.image === null ?
              <img src={profile} alt="profile" className="w-[100%] h-[100%]" />
              :
              <img className="w-12 h-12 rounded-full ring-2 ring-[#426eb1]" src={`http://localhost:4923/avatar/` + user.image} alt="profile" />
            }
          </Link>
        </li>
      </ul>

      {/*Sidebar Responsive*/}
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]"
          onClick={() => settoggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-[25px] bg-[#d3e3ff] absolute top-24 right-0 mx-4 my-1 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none ">
            {sideNav.slice(0, 5).map((nav, index) => (
              <li
                key={nav.name}
                className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px]  ${index === sideNav.length - 1 ? 'mb-0' : 'mb-6'} flex gap-4`}
                onClick={index === sideNav.length - 1 ? handleLogout : null}
              >
                <img src={nav.img} alt={nav.name} className="w-7 h-7" />
                <Link to={index === sideNav.length - 1 ? "/" : `/${nav.name}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default NavProfile;
