import { DropDown, Button } from ".";
import { report } from "../assets";

const ContentReport = () => {
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
        <Button link="#" text="Print Laporan" customClass="py-2 lg:px-14 sm:px-10 px-8 rounded-[10px]" />
      </div>
    </div>
  );
};

export default ContentReport;
