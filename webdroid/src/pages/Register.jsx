import React from 'react'
import { NavRegis, InputText } from '../components'

const Register = () => {
    return (
        <div className="w-full overflow-hidden bg-white">

            <div className="w-full md:px-[120px] px-7 bg-white fixed z-[10]">
                <div className="w-full">
                    <NavRegis />
                </div>
            </div>

            <div className="w-full md:px-[120px] px-7 bg-white fixed mt-20 z-[10]">
                <div className="w-full">
                    <InputText type={`text`} name={`nama`} placeholder={`Input Nama Anda`} />
                </div>
            </div>

        </div>
    )
}

export default Register