import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

import { useState } from "react";

const NavHome = () => {
  const [toggle, settoggle] = useState(false);
  const [login, setlogin] = useState(false);

  function SideMenu() {
    if (!login) {
      return navLinks.slice(4, 6).map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ${index === navLinks.length - 1 ? "mb-0" : "mb-6"}`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ));
    } else if (login) {
      return navLinks.slice(-2).map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ${index === navLinks.length - 1 ? "mb-0" : "mb-6"}`}>
          <a href={`#${nav.id}`} className="capitalize">
            {nav.id}
          </a>
        </li>
      ));
    }
    return null;
  }

  function HomeMenu({ nav, index }) {
    if (index === 0) {
      return (
        <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ml-[65px]`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      );
    } else if (!login && index >= 1 && index <= 2) {
      return (
        <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ml-[65px]`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      );
    } else if (login && index >= 3 && index <= 4) {
      return (
        <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ml-[65px]`}>
          <a href={`#${nav.id}`}>
            <img src={nav.title} alt={nav.id} className="w-[100%] h-[100%]" />
          </a>
        </li>
      );
    }
  }

  return (
    <nav className="w-full flex py-3 items-center navbar flex-1 justify-between">
      <ul className="list-none lg:flex hidden justify-start items-center flex-1">
        {navLinks.slice(0, 3).map((nav) => (
          <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] mr-[65px]`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <a href="#">
        <img src={logo} alt="logo" className="w-[80px] h-[55px] cursor-pointer" onClick={() => setlogin((prev) => !prev)} />
      </a>

      <ul className="list-none lg:flex hidden justify-end items-center flex-1">
        {navLinks.slice(3, 8).map((nav, index) => (
          <HomeMenu nav={nav} index={index} />
        ))}
      </ul>

      {/*Sidebar Responsive*/}
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px]" onClick={() => settoggle((prev) => !prev)} />

        <div className={`${toggle ? "flex" : "hidden"} p-5 bg-[#d3e3ff] absolute top-24 right-0 mx-4 my-1 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.slice(0, 4).map((nav) => (
              <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] mb-6`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <SideMenu />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
