import { Hero, Navbar, About, Card } from "../components"


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
        <div className="w-full md:px-[120px] px-7 custom-gradient bg-blue-500  mt-[85px]">
            <div className="w-full">
                <Card />
            </div>
        </div>
        {/*  */}


        {/*  */}
        <div className="w-full md:px-[120px] px-7 custom-gradient bg-blue-500 ">
            <div className="w-full">
                <About />
            </div>
        </div>


    </div>
)

export default Home