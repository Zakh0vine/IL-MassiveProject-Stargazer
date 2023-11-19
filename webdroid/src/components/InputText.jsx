import React from 'react'

const InputText = ({ type, name, placeholder, width, height }) => {
    return (
        <input type={type} name={name} placeholder={placeholder} className={`border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium w-[${width}] h-[${height}]`} />
    )
}

export default InputText