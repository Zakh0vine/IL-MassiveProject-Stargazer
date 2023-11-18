import React from 'react';
import { Manage, Recruiting, Risk, Star, Time } from "../assets/image";
import { cardsData } from "../constants";

export default function Card() {
  return (
    <>
      {/* max-w-4x1 */}
      <div className="container grid grid-cols-3 gap-10 mx-[1px] max-w-5xl my-[20px]">
        {/* Baris 1 */}
        {/* Col 1 */}
        <div className="md:col-span-2 col-span-3  md:items-start items-center md:text-start text-center">
          <div className="bg-white p-9 h-full rounded-xl shadow-md md:items-start md:text-start ">
            <div className='flex justify-center items-center w-full h-full'>
              <h3 className="text-[50px] font-bold">
                Fitur<span className="text-blue-400 mx-2"> Spesial </span> <br/>Untuk Anda
              </h3>
              <img src={Star} alt="Deskripsi gambar bintang burik" className='w-[200px] h-auto object-contain' />
            </div>
          </div>
        </div>
        {/* Col 2 */}
        <div className="md:col-span-1 col-span-3 md:items-start items-center md:text-start text-center">
          <div className="bg-white p-4 px-8 py-6 md:mx-auto mx-100 max-w-4xl rounded-xl shadow-md">
            <div className='w-[100%] flex justify-center items-center'>
              <img src={Manage} alt="Deskripsi gambar tablet" className='w-full h-auto ' />
            </div>
            <h3 className="text-xl font-bold">{cardsData[1].title}</h3>
            <p>{cardsData[1].content}</p>
          </div>
        </div>
        {/* Baris 2 */}
        {/* Col 1 */}
        <div className="md:col-span-1 col-span-3 md:items-start items-center md:text-start text-center">
          <div className="bg-white p-4 h-full rounded-xl shadow-md">
            <div className='w-[100%] flex justify-center items-center'>
              <img src={Risk} alt="Deskripsi gambar speed" className="w-full h-auto object-contain py-2" />
            </div>
            <h3 className="text-xl font-bold">{cardsData[2].title}</h3>
            <p>{cardsData[2].content}</p>
          </div>
        </div>
        {/* Col 2 */}
        <div className="md:col-span-1 col-span-3 md:items-start items-center md:text-start text-center">
          <div className="bg-white p-4 h-full rounded-xl shadow-md">
            <div className='w-[100%] flex justify-center items-center'>
              <img src={Time} alt="Deskripsi gambar alarm" className=" w-5/6 h-auto" />
            </div>
            <h3 className="text-xl font-bold">{cardsData[3].title}</h3>
            <p>{cardsData[3].content}</p>
          </div>
        </div>
        {/* Col 3 */}
        <div className="md:col-span-1 col-span-3">
          <div className="bg-white p-4 h-full rounded-xl shadow-md md:items-start items-center md:text-start text-center">
            <div className='w-[100%] flex justify-center items-center'>
              <img src={Recruiting} alt="Deskripsi gambar menginjak buku" className="w-3/4 h-auto py-6" />
            </div>
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
