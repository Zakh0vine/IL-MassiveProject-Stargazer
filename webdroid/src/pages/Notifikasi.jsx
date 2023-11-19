import React from 'react'
import Sidebar from '../components/Sidebar_test'
import Box_Notif from '../components/Box_Notif'
import { NavProfile } from '../components'

export default function Notifikasi() {
    return (
        <div className='flex'>
            <div className="w-full px-[70px] shadow-lg shadow-slate-300 bg-white fixed z-[10]">
                <div className="w-full">
                    <NavProfile />
                </div>
            </div>
            <div className="flex justify-center w-full my-[130px] px-[70px] py-3">
                    <div className="w-full flex mx-5 gap-[60px]">
                        <Sidebar />
                        <Box_Notif />
                    </div>
            </div>
        </div >
    )
}
