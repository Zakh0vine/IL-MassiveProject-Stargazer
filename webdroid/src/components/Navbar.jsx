import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

import { useState } from "react";

const Navbar = () => {
    const [toggle, settoggle] = useState(false);

    return (
        <nav className="w-full flex py-3 items-center navbar flex-1 justify-between">
            <ul className="list-none lg:flex hidden justify-start items-center flex-1">
                {navLinks.slice(0, 3).map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-semibold cursor-pointer text-black text-[20px] mr-[65px]`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <img src={logo} alt="logo" className="w-[80px] h-[55px] cursor-pointer" />

            <ul className="list-none lg:flex hidden justify-end items-center flex-1">
                {navLinks.slice(3, 6).map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-semibold cursor-pointer text-black text-[20px] ml-[65px]`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="lg:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px]"
                    onClick={() => settoggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-5 bg-[#9EDDFF] absolute top-20 right-0 mx-4 my-1 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-semibold cursor-pointer text-black text-[20px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-6'}`}
                            >
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar