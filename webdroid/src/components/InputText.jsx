import React from 'react'

const InputText = ({ type, name, placeholder }) => {
    return (
        <input type={type} name={name} placeholder={placeholder} className='border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-2 px-4 focus:outline-none focus:border-[#6499E9]' />
    )
}

export default InputText