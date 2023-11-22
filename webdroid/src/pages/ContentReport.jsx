import { DropDown, Button } from "../components"
import { report } from "../assets"

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
    ]

    return (
        <div className="w-[40%] py-3 px-4 bg-slate-100">
            <h2 className="font-poppins font-bold text-[30px] my-2">Laporan</h2>
            <img src={report} alt="Image Report" className="w-full h-auto my-3" />
            <div className="w-full my-2 flex items-center justify-center gap-5">
                <DropDown title="Filter" item={item} />
                <Button link="#" text="Print Laporan" customClass="py-2 px-14 rounded-[10px]" />
            </div>
        </div>
    )
}

export default ContentReport