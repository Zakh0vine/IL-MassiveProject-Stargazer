import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

const NavHome = ({ login, user }) => {
  const [toggle, settoggle] = useState(false);

  function SideMenu() {
    if (!login) {
      return (
        navLinks.slice(4, 6).map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-6'}`}
          >
            <Link to={index === 0 ? '/login' : index === 1 ? '/register' : '/'}>
              {nav.title}
            </Link>
          </li>
        ))
      )
    } else if (login) {
      return (
        navLinks.slice(6, 8).map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold capitalize cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-6'}`}
          >
            <Link to={index === 0 ? '/notifikasi' : index === 1 ? '/profile' : '/'}>
              {nav.id}
            </Link>
          </li>
        ))
      )
    }
    return null;
  }

  function HomeMenu({ nav, index }) {
    if (index === 0) {
      return (
        <li
          key={nav.id}
          className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ml-[65px]`}
        >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      )
    } else if (!login && index >= 1 && index <= 2) {
      return (
        <li
          key={nav.id}
          className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ml-[65px]`}
        >
          <Link to={index === 1 ? '/login' : index === 2 ? '/register' : '/'}>
            {nav.title}
          </Link>
        </li>
      )
    } else if (login && index >= 3 && index <= 4) {
      return (
        <li
          key={nav.id}
          className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] ml-[65px]`}
        >
          {index === 3 ?
            <Link to="/notifikasi">
              <img src={nav.title} alt={nav.id} className="w-[100%] h-[100%]" />
            </Link>
            : index === 4 ?
              <Link to="/profile">
                {user.image === "" || user.image === null ?
                  <img src={nav.title} alt={nav.id} className="w-[100%] h-[100%]" />
                  :
                  <img src={`http://localhost:4923/avatar/` + user.image} alt={nav.id} className="w-12 h-12 rounded-full ring-2 ring-[#426eb1]" />
                }
              </Link>
              : null}
        </li>
      )
    }
  }

  return (
    <nav className="w-full flex py-3 items-center navbar flex-1 justify-between">
      <ul className="list-none lg:flex hidden justify-start items-center flex-1">
        {navLinks.slice(0, 3).map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] mr-[65px]`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <a href="#">
        <img src={logo} alt="logo" className="w-[80px] h-[55px] cursor-pointer" />
      </a>

      <ul className="list-none lg:flex hidden justify-end items-center flex-1">
        {
          navLinks.slice(3, 8).map((nav, index) => (
            <HomeMenu nav={nav} index={index} />
          ))
        }
      </ul>

      {/*Sidebar Responsive*/}
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]"
          onClick={() => settoggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-5 bg-[#d3e3ff] absolute top-24 right-0 mx-4 my-1 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.slice(0, 4).map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] mb-6`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            <SideMenu />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavHome;
