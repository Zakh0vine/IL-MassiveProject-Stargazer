import React from 'react'
import Sidebar from '../components/Sidebar_test'
import NavHome from '../components/NavHome'
import Box_Notif from '../components/Box_Notif'

export default function Notifikasi() {
    return (
        <div className='flex h-[850px]'>
            <div className="w-full md:px-[120px] px-7 shadow-lg shadow-slate-300 bg-white fixed z-[10]">
                <div className="w-full">
                    <NavHome />
                </div>
            </div>
            <div className="flex">
                {/*  */}
                <div className="md:px-[100px] px-7 mt-[150px]">
                    <div className="w-full">
                        <Sidebar />
                    </div>
                </div>
                {/*  */}
                <div className="md:px-[100px] px-7 mt-[100px]">
                    <Box_Notif />
                </div>
            </div>
        </div >
    )
}
