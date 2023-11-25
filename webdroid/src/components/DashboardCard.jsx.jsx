import React from 'react';
import {DiaPie, NivoBarChartCard } from '../components'
import { Kon, Phar } from '../assets/image/index'



export default function Dash() {
    const data = [
        { id: 'Full', value: 100 },
        { id: 'Mid', value: 80 },
        { id: 'Low', value: 20 },
    ];

    return (
        <div>
            <div className='flex justify-between lg:w-[720px] w-[400px] mx-auto md:py-0 py-10'>
                <div>
                    <span className='text-xl font-bold'>Hello,</span> <span className='text-blue-300 text-xl'>User</span>
                    <p className='text-gray-500'>Here are your daily updates.</p>
                </div>
                <div className='text-xl font-bold py-2'>
                    Dashboard
                </div>
            </div>
            <div className="container grid grid-cols-2 gap-10 max-w-2xl md:m-10 flex justify-center">
                {/* Card 1 */}
                <div className='col-span-2 md:col-span-1 md:items-start items-center md:text-start text-center'>
                    <div className="bg-white rounded-md shadow-md w-full lg:col-span-1 col-span-2 lg:w-full w-[500px] outline outline-offset-0">
                        <div className='p-3'>
                            {/* 1 */}
                            <div className="flex justify-between py-3">
                                <div className='font-bold text-xl'>
                                    Total Obat
                                </div>
                                <div className='w-[55px] border rounded-full px-1 text-blue-200 bg-white self-end md:mr-2 flex justify-center font-bold outline outline-2'>
                                    Live
                                </div>
                            </div>
                            <hr />
                            {/* 2 */}
                            <div className='columns-2 font-medium text-md'>
                                200 Obat
                                <img src={Kon} alt="Juggler" className='w-full h-auto' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1 md:items-start items-center md:text-start text-center'>
                    <div className='flex justify-center lg:flex hidden'>
                        <img src={Phar} className='md:h-[200px] w-auto' />
                    </div>
                </div>
                {/* Card 2 */}
                <div className='col-span-2 md:col-span-1 md:items-start items-center md:text-start text-center '>
                    <div className="bg-white rounded-md shadow-md w-full lg:col-span-1 col-span-2 lg:w-full w-[500px] outline outline-offset-0">
                        <div className='p-3'>
                            {/*  */}
                            <div className="flex font-bold text-xl mb-2">
                                Jumlah Obat
                            </div>
                            <hr />
                            <div className='flex gap-10 m-2'>
                                <div>
                                    4H 18M
                                </div>
                                <div className='md:mr-2 w-[65px] border rounded-full px-1 text-blue-200 bg-white self-end flex justify-center font-bold outline outline-2'>
                                    5.7%
                                </div>
                            </div>
                            <div className='h-[100px]'>
                                <NivoBarChartCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1 md:items-start items-center md:text-start text-center '>
                    <div className="bg-white rounded-md shadow-md w-full lg:col-span-1 col-span-2 lg:w-full w-[500px]  outline outline-offset-0">
                        <div className=''>
                            <div className="flex justify-between p-3">
                                <div className='font-bold text-xl'>
                                    Level Stock
                                </div>
                                <div className='w-[55px] border rounded-full px-1 text-blue-200 bg-white self-end md:mr-2 flex justify-center font-bold outline outline-2'>
                                    Live
                                </div>
                            </div>
                            <hr />
                            <div className='flex px-3'>
                                {/* Pie */}
                                <div className=' w-[150px] h-[150px] pl-3'>
                                    <DiaPie data={data} />
                                </div>
                                <div className='flex gap-10 mx-3 mt-10'>
                                    {/* Ket */}
                                    <div className='columns-1 gap-1'>
                                        <div>
                                            Full
                                        </div>
                                        <div>
                                            Mid
                                        </div>
                                        <div>
                                            Small
                                        </div>
                                    </div>
                                    {/* Value */}
                                    <div>
                                        <div>
                                            100
                                        </div>
                                        <div>
                                            100
                                        </div>
                                        <div>
                                            100
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}