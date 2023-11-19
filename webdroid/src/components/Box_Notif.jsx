import React from 'react';
import { notifikasi } from '../constants';


const Lingkaran = ({ bunder }) => (
    <div className="relative inline-block">
        <div className="absolute top-[0] left-[-5px] w-12 h-12 bg-warnaUnggu rounded-full z-0 opacity-50">{bunder}</div>
    </div>
)


const Box_Notif = () => {
    return (
        <div className='flex items-start w-full  justify-center lg:mt-5'>
            <div className='lg:ml-4 lg:w-[750px]'>
                <Lingkaran />
                <h1 className='relative text-3xl font-black mb-7'>
                    Notifikasi
                </h1>
                {notifikasi.slice(0, notifikasi.length).map((e) => (
                    <div key={e.name} className='mb-4'>
                        <div className='p-3 rounded-sm outline outline-1'>
                            <div className='flex items-center'>
                                <p className='pl-3 text-base font-medium text-gray-900'>{e.title} <span className='font-bold'>{e.ket}</span> {e.kadal}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Box_Notif;
