import React from 'react'
import { Kiri, Tengah, Kanan } from "../../assets/image";
import { Aditya, Anam, Chandra, Diah, Putra, Adi, Cw1, ksng } from "../../assets/image";

function About() {
  return (
    <>
      <div className=' flex justify-center px-20 py-10 m-20 '>
        {/* Header About */}
        <div>
          <div className='md:items-start text-center md:text-left md:mx-auto'>
            <h1 className='flex justify-center text-[40px] font-black p-5 '>Tentang Kami</h1>
            <p className='text-xl font-medium text-center md:items-start'>
              Kami adalah sebuah tim yang memiliki komitmen kuat untuk meningkatkan kinerja dan efisiensi apotek independen. Fokus utama kami adalah menciptakan solusi inovatif yang memungkinkan apotek untuk mengelola stok obat dengan lebih efektif dan efisien.
            </p>
          </div>
        </div>
      </div>
      {/* Image Doktah */}
      <div className="md:items-start items-center text-center md:text-left md:mx-auto">
        <div className='flex flex-col md:flex-row justify-center m-10 md:m-20 gap-10'>
          <img src={Kiri} alt="Kiri" className='self-end md:w-1/3' />
          <img src={Tengah} alt="Tengah" className='mt-[-100px] md:w-1/3' />
          <img src={Kanan} alt="Kanan" className='self-end md:w-1/3' />
        </div>
      </div>

      {/* Header Tim */}
      <div className=' flex justify-center px-20 py-10 m-20'>
        <div>
          <h1 className='flex justify-center text-[40px] font-black p-5'>Struktur Tim</h1>
          <p className='text-xl font-medium text-center'> Tim kami terdiri dari berbagai ahli, mulai dari pemimpin yang berpengalaman, pengembang aplikasi yang handal hingga desainer UI/UX yang kreatif. </p>
        </div>
        {/* Tim Muka */}
      </div>
      <div className=''>
        <div className='flex flex-wrap justify-center m-10 gap-5 md:gap-10'>
          <img src={Aditya} alt="aditya" className='self-end w-32 h-auto md:w-24 md:h-auto' />
          <img src={Anam} alt="anam" className='self-end w-32 h-auto md:w-24 md:h-auto' />
          <img src={Diah} alt="diah" className='self-end w-32 h-auto md:w-24 md:h-auto' />
          <img src={Chandra} alt="chandrug" className='self-end w-32 h-auto md:w-24 md:h-auto' />
          <img src={Putra} alt="putra" className='self-end w-32 h-auto md:w-24 md:h-auto' />
        </div>
        <div className='flex flex-wrap justify-center m-10 gap-5 md:gap-10'>
          <img src={Adi} alt="aditya" className='self-end w-32 h-auto md:w-24 md:h-auto' />
          <img src={Cw1} alt="anam" className='self-end w-32 h-auto md:w-24 md:h-auto' />
          <img src={ksng} alt="diah" className='self-end w-32 h-auto md:w-24 md:h-auto' />
          <img src={ksng} alt="chandrug" className='self-end w-32 h-auto md:w-24 md:h-auto' />
          <img src={ksng} alt="putra" className='self-end w-32 h-auto md:w-24 md:h-auto' />
        </div>
      </div>

    </>
  )
}

export default About