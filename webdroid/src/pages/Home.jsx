import { Hero, Navbar, Demo, Download } from "../components";

const Home = () => (
    <div className="w-full overflow-hidden bg-white">

        <div className="w-full md:px-[120px] px-7 shadow-lg shadow-slate-300 bg-white fixed">
            <div className="w-full">
                <Navbar />
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
