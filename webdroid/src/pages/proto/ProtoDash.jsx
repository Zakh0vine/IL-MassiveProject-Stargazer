import React from 'react'
import { NavProfile, Sidebar, Footer } from '../../components'
import Proto_dashCard from '../../components/proto/proto_dashCard.jsx'

export default function Proto_dash() {
  return (
    <div className='w-full overflow-hidden bg-white'>
      <div className="w-full lg:px-[120px] px-10 shadow-lg shadow-slate-200 bg-white fixed z-[10]">
        <NavProfile />
      </div>
      <div className="flex flex-1 lg:justify-start justify-center items-start w-full min-h-screen h-auto my-[100px] lg:px-[120px] px-10 py-10">
        <div className="lg:mx-10 mx-0 self-start mt-10">
          <Sidebar content={1} />
        </div>
        <div className="lg:mx-1 mx-0 h-auto">
          <Proto_dashCard />
        </div>
      </div>
      {/* Footer */}
      <div className="w-full h-auto">
        <Footer />
      </div>
    </div>
  )
}
