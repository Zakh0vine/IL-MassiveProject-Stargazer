import { medication } from '../assets';

const Hero = () => {
    return (
        <div className='flex md:py-16 py-10 md:flex-row flex-col'>

            <div className='flex-1 px flex-col flex justify-center md:items-start items-center md:text-start text-center'>
                <h3 className='font-poppins font-bold text-[50px] mb-10'>Solusi Stok Obat Terbaik Untuk Apotekmu!</h3>
                <p className='font-poppins font-medium text-[23px] mb-10 sm:leading-[45px] leading-[37px]'>Dengan Medistock, Anda bisa lebih fokus <br /> pada apa yang benar-benar penting:<br /> kesehatan pelanggan.</p>
                <div className='flex-1 md:hidden flex justify-end items-center relative mb-10'>
                    <img src={medication} alt="medisPicture" className='w-[85%] h-[85%] relative' />
                </div>
                <a href='#fitur' className='px-10 py-4 rounded-[20px] bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] font-poppins font-semibold text-white text-[20px]'>Jelajahi Lebih Lanjut</a>
            </div>

            <div className='flex-1 md:flex hidden items-center relative my-0'>
                <img src={medication} alt="medisPicture" className='w-[95%] h-[95%] relative z-[5]' />
            </div>

        </div>
    )
}

export default Hero