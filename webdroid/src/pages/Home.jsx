import { Hero, Demo, Download, About, Card, Footer, NavHome } from "../components";

const Home = () => (
  <div className="w-full overflow-hidden bg-white">

    <div className="w-full md:px-[120px] px-7 shadow-lg shadow-slate-300 bg-white fixed z-[10]">
      <div className="w-full">
        <NavHome />
      </div>
    </div>

    {/* Hero */}
    <section className="w-full md:px-[120px] px-7 bg-white lg:pt-[45px] pt-[85px]" id="hero">
      <div className="w-full">
        <Hero />
      </div>
    </section>

    {/* Fitur */}
    <section className="w-full md:px-[120px] px-7 custom-gradient bg-blue-500 py-[30px]" id="fitur">
      <div className="w-full flex justify-center">
        <Card />
      </div>
    </section>

    {/* Video */}
    <section className="w-full h-auto md:px-[120px] px-7 bg-white py-[110px]" id="demo">
      <div className="w-full">
        <Demo />
      </div>
    </section>

    {/* About */}
    <section className="w-full md:px-[120px] px-7 custom-gradient bg-blue-500 pb-[100px]" id="tentang">
      <div className="w-full">
        <About />
      </div>
    </section>

    {/* Promo */}
    <section className="w-full h-auto md:px-[120px] px-7 bg-white py-[85px]" id="download">
      <div className="w-full">
        <Download />
      </div>
    </section>

    {/* Footer */}
    <section className="w-full h-auto">
      <div className="w-full">
        <Footer />
      </div>
    </section>

  </div>
);

export default Home;
