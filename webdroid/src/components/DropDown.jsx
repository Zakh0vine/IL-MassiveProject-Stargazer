import { useState } from "react";
import { Vector } from "../assets";

const DropDown = ({ title, item = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-[40%]'>
            <div className="relative inline-block w-full">
                <button
                    type="button"
                    className="w-full lg:px-14 sm:px-10 px-8 py-2 text-[#6499E9] font-poppins bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-[#6499E9] rounded-[10px] font-semibold text-[20px] flex justify-between items-center outline outline-[#6499E9] outline-3"
                    onClick={toggleDropdown}
                >
                    <p>{title}</p>
                    <img src={Vector} alt="filter" />
                </button>

                {isOpen && (
                    <div className="absolute left-0 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {item.map((item) => (
                                <li
                                    key={item.key}
                                >
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropDown