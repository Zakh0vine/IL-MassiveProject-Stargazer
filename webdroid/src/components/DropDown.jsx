import { useState, useEffect } from "react";
import { Vector } from "../assets";
import axios from "axios";

const DropDown = ({ title, item = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    closeDropdown();

    try {
      const response = await axios.get(`http://localhost:4923/api/v1/fifofefo?orderType=${item.key}`);
      // Lakukan sesuatu dengan data yang diterima dari API (response.data), seperti menyimpannya di state komponen atau melakukan operasi lainnya.
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    }
  };

  return (
    <div className="w-[40%]">
      <div className="relative inline-block w-full space-x-5">
        <button
          type="button"
          className="w-full lg:px-14 sm:px-10 px-8 py-2 text-[#6499E9] font-poppins bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-[#6499E9] rounded-[10px] font-semibold text-[20px] flex justify-between items-center outline outline-[#6499E9] outline-3"
          onClick={toggleDropdown}
        >
          <p>{selectedItem ? selectedItem.title : title}</p>
          <img src={Vector} alt="filter" />
        </button>

        {isOpen && (
          <div className="absolute right-[1px] mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {item.map((item) => (
                <li key={item.key}>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => handleItemClick(item)}>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
