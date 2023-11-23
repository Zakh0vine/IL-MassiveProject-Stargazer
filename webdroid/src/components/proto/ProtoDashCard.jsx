import React from 'react';
import DiaPie from '../DashPie';
import NivoBarChartCard from '../HorizontalBar';
import { Kon, Phar } from '../../assets/image/index'



export default function Proto_dashCard() {
    const data = [
        { id: 'Full', value: 100 },
        { id: 'Mid', value: 80 },
        { id: 'Low', value: 20 },
    ];

    return (
        <div>
            <div className='flex bg-gray-100 justify-between w-[700px]'>
                <div className=''>
                    <span className='text-xl font-bold'>Hello,</span> <span className='text-blue-300 text-xl'>User</span>
                    <p className='text-gray-500'>Here are your daily updates.</p>
                </div>
                <div className='text-xl font-bold py-2'>
                    Dashboard
                </div>
            </div>
            <div className="container grid grid-cols-3 gap-10 max-w-5xl bg-red-100 my-10">
                <div className='md:col-span-2 col-span-3  md:items-start items-center md:text-start text-center'>

                </div>
            </div>
        </div>

    );
}