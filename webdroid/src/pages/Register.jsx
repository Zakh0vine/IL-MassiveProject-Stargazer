import { Link } from 'react-router-dom';

import { logo } from '../assets';
import { ContentRegis } from '../components';

const Register = () => {
    return (
        <div className="w-full  overflow-hidden bg-white">

            <div className="w-full md:px-[120px] px-7 bg-white fixed z-[10]">
                <nav className="w-full flex py-3 items-center navbar flex-1 justify-between">
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-[80px] h-[55px] cursor-pointer flex justify-start" />
                    </Link>

                    <ul className="list-none flex justify-end items-center flex-1">
                        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] sm:mr-[65px] mr-[30px]`}>
                            <Link to="/login" className={`border-b-2`}>
                                Masuk
                            </Link>
                        </li>
                        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] sm:mr-[65px] mr-[30px]`}>
                            <Link to="/login" className={`border-b-2 border-b-[#5d6af8] text-[#5d6af8]`}>
                                Daftar
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="w-full md:px-[120px] px-7 bg-white fixed lg:mt-20 mt-36 z-[10]">
                <div className="w-full">
                    <ContentRegis />
                </div>
            </div>

        </div>
    )
}

export default Register