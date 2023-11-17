import React from 'react';
import { Manage, Recruiting, Risk, Star, Time } from "../../assets/image";

const cardsData = [
  { title: ' ', content: '', img: "" },
  { title: 'Metode FIFO FEFO', content: 'Sistem rotasi stok "FIFO" (First-In-First-Out) & “FEFO” (First-Expired-First-Out) untuk efisiensi manajemen persediaan.', img: 'path/to/image1.jpg' },
  { title: 'Cetak Laporan', content: 'Cetak laporan yang informatif dan mudah dipahami untuk analisis apotek dengan lebih baik.', img: 'path/to/image1.jpg' },
  { title: 'Notifikasi', content: 'Dapatkan notifikasi ketika barang mendekati tanggal kadaluwarsa atau stok hampir habis.', img: 'path/to/image1.jpg' },
  { title: 'Filter dan Riwayat', content: 'Memudahkan Anda dalam menyaring data, seperti jenis obat yang tersedia dan riwayat obat masuk maupun terjual.', img: 'path/to/image1.jpg' },
];

export default function Card() {
  return (
    <>
      <div className='p-20'>
        <h1>Halaman Card</h1>
      </div>
      {/* max-w-4x1 */}
      <div className="container grid grid-cols-3 gap-10 mx-auto max-w-5xl ">
        {/* Baris 1 */}
        <div className="col-span-2  md:items-start items-center md:text-start text-center">
          <div className="bg-white p-9 h-full rounded-xl shadow-md md:items-start  md:text-start ">
            <div className='flex justify-center items-center w-full h-full'>
              <h3 className="text-xl font-bold text-[50px]">
                Fitur
                <span className="text-blue-400 mx-2"> Spesial </span> <br /> <br />
                Untuk Anda
              </h3>
              <img src={Star} alt="Deskripsi gambar bintang burik" className='w-[200px] h-auto object-contain' />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 md:items-start items-center md:text-start text-center">
          <div className="bg-white p-4 px-8 py-6 mx-auto max-w-4xl rounded-xl shadow-md">
            <img src={Manage} alt="Deskripsi gambar tablet" className='w-5/6 h-auto' />
            <h3 className="text-xl font-bold">{cardsData[1].title}</h3>
            <p>{cardsData[1].content}</p>
          </div>
        </div>

        {/* Baris 2 */}
        <div className="col-span-2 md:col-span-1 md:items-start items-center md:text-start text-center">
          <div className="bg-white p-4 h-full rounded-xl shadow-md">
            <img src={Risk} alt="Deskripsi gambar speed" className="w-full h-auto object-contain py-2" />
            <h3 className="text-xl font-bold">{cardsData[2].title}</h3>
            <p>{cardsData[2].content}</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 md:items-start items-center md:text-start text-center">
          <div className="bg-white p-4 h-full rounded-xl shadow-md">
            <img src={Time} alt="Deskripsi gambar alarm" className=" w-5/6 h-auto" />
            <h3 className="text-xl font-bold">{cardsData[3].title}</h3>
            <p>{cardsData[3].content}</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="bg-white p-4 h-full rounded-xl shadow-md md:items-start items-center md:text-start text-center">
            <img src={Recruiting} alt="Deskripsi gambar menginjak buku" className="w-3/4 h-auto py-6" />
            <h3 className="text-xl font-bold">{cardsData[4].title}</h3>
            <p>{cardsData[4].content}</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='p-20'>

      </div>
    </>
  );
}
