import React from 'react';
import { sideNav } from '../constants';

// Chandra Gabut 
const Sidebar = () => {
    return (
        <nav className="flex justify-center">
            <div className='mx-4 my-35'>
                <div className="flex bg-white drop-shadow-md rounded-lg p-4 ">{/* h-screen */}
                    <ul className="list-none py-10 px-5">
                        {sideNav.slice(0, 5).map((nav) => (
                            <li
                                key={nav.name}
                                className={`flex items-center justify-space font-medium cursor-pointer text-black hover:text-[#5d6af8] text-[20px] mr-[65px] mb-10`}
                            >
                                <div className='flex items-center'>
                                    <img src={nav.img} alt={nav.name} className="w-6 h-6 mr-2" /> {/* Tambahkan gambar ikon di samping kiri */}
                                    <a href={`#${nav.name}`}>
                                        {nav.title}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Sidebar;
