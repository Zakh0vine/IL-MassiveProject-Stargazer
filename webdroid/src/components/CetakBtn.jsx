import * as XLSX from "xlsx/xlsx.mjs";

const CetakBtn = ({ fetchData, fileName, customClass }) => {
  const handleDownload = async () => {
    try {
      const data = await fetchData();
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
    } catch (error) {
      console.error("Error fetching or downloading data:", error);
    }
  };

  return (
    <button className={`bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] font-poppins font-semibold text-white text-[20px] ${customClass}`} onClick={handleDownload}>
      Print Laporan
    </button>
  );
};

export default CetakBtn;
