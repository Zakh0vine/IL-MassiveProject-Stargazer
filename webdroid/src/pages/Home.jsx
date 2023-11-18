import { Hero, NavHome, Demo, Download } from "../components";

const Home = () => (
    <div className="w-full overflow-hidden bg-white">

        <div className="w-full md:px-[120px] px-7 shadow-lg shadow-slate-300 bg-white fixed z-[10]">
            <div className="w-full">
                <NavHome />
            </div>
        </div>

        <div className="w-full md:px-[120px] px-7 bg-white mt-[85px]">
            <div className="w-full">
                <Hero />
            </div>
        </div>

        <div className="w-full h-auto md:px-[120px] px-7 bg-white mt-[85px]">
            <div className="w-full">
                <Demo />
            </div>
        </div>

        <div className="w-full h-auto md:px-[120px] px-7 bg-white mt-[85px]">
            <div className="w-full">
                <Download />
            </div>
        </div>
    </div>
);

export default Home;
