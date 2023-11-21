import React from "react";
import { Kiri, Tengah, Kanan } from "../assets/image";
import { Aditya, Anam, Chandra, Diah, Putra, Adi, Cw1, ksng } from "../assets/image";
import "../index.css";

function About() {
  return (
    <>
      <div>
        <div className="flex md:py-20 py-10 md:px-25 px-10 m-10 md:flex-row flex-col">
          {/* Header About */}
          <div>
            <div className="md:items-start text-center md:text-left md:mx-auto">
              <h1 className="flex justify-center text-[40px] font-black p-5 ">Tentang Kami</h1>
              <p className="text-xl font-medium text-center md:items-start sm:leading-[45px] leading-[37px]">
                Kami adalah sebuah tim yang memiliki komitmen kuat untuk meningkatkan kinerja dan efisiensi apotek independen. Fokus utama kami adalah menciptakan solusi inovatif yang memungkinkan apotek untuk mengelola stok obat dengan
                lebih efektif dan efisien.
              </p>
            </div>
          </div>
        </div>
        {/* Image Doktah */}
        <div className="md:items-start items-center md:text-left md:mx-auto">
          <div className="flex md:flex-row flex-col justify-center m-10 md:m-20 gap-10">
            <img src={Kiri} alt="Kiri" className="md:w-1/3" />
            <img src={Tengah} alt="Tengah" className="md:mt-[-100px] md:w-1/3" />
            <img src={Kanan} alt="Kanan" className="md:w-1/3" />
          </div>
        </div>

        {/* Header Tim */}
        <div className=" md:items-start text-center md:text-left md:mx-auto">
          <div>
            <h1 className="flex justify-center text-[40px] font-black p-5">Struktur Tim</h1>
            <p className="text-xl font-medium text-center md:items-start sm:leading-[45px] leading-[37px]">
              {" "}
              Tim kami terdiri dari berbagai ahli, mulai dari pemimpin yang berpengalaman, pengembang aplikasi yang handal hingga desainer UI/UX yang kreatif.{" "}
            </p>
          </div>
          {/* Tim Muka */}
        </div>
        <div className="flex justify-center flex-col">
          <div className="grid grid-cols-5 m-10 gap-5 px-10 text-center">
            <img src={Aditya} alt="aditya" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
            <img src={Anam} alt="anam" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
            <img src={Diah} alt="diah" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
            <img src={Chandra} alt="chandrug" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
            <img src={Putra} alt="putra" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
          </div>
          <div className="grid grid-cols-5 m-10 gap-5 px-10 text-center">
            <img src={Adi} alt="adi" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
            <img src={Cw1} alt="cw1" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
            <img src={ksng} alt="ksng1" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
            <img src={ksng} alt="ksng2" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
            <img src={ksng} alt="ksng3" className="w-32 h-auto md:w-24 md:h-auto place-self-center" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
