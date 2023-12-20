import React, { useEffect, useState } from "react";
import { CetakBtn, DropDown } from ".";
import { report } from "../assets";
import axios from "axios";

const ContentReport = () => {
  const [obatData, setObatData] = useState([]);

  // Fungsi untuk mengambil data obat dari server
  const fetchObatData = async () => {
    try {
      const response = await axios.get("http://localhost:4923/api/v1/obat");
      return response.data;
    } catch (error) {
      console.error("Error fetching obat data:", error);
      throw error;
    }
  };

  // Gunakan useEffect untuk mengambil data obat saat komponen dimount
  useEffect(() => {
    fetchObatData()
      .then((data) => setObatData(data))
      .catch((error) => console.error("Error setting obat data:", error));
  }, []);

  const item = [
    {
      key: "fifo",
      title: "FIFO",
    },
    {
      key: "fefo",
      title: "FEFO",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h2 className="font-poppins font-bold text-[30px] my-2 self-start">Laporan</h2>
      <img src={report} alt="Image Report" className="w-auto h-auto my-3" />
      <div className="w-full my-2 flex flex-1 items-center justify-center gap-5">
        <DropDown title="Filter" item={item} />
        <CetakBtn fetchData={fetchObatData} fileName="laporan_obat" customClass="py-2 lg:px-14 sm:px-10 px-8 rounded-[10px]" />
      </div>
    </div>
  );
};

export default ContentReport;
