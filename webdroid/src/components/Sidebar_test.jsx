import { Link } from 'react-router-dom'
import { sideNav } from '../constants';

const Sidebar = ({ content }) => {
    return (
        <nav className="flex justify-center h-[450px]">
            <div className=' lg:flex hidden '>
                <div className="flex bg-white drop-shadow-lg rounded-lg p-3">
                    <ul className="list-none py-7 px-5">
                        {sideNav.slice(0, 5).map((nav, index) => (
                            <li
                                key={nav.name}
                                className={`flex items-center justify-space font-medium cursor-pointer text-black hover:text-warnaUnggu text-[20px] mr-[65px] mb-10 ${index === sideNav.length - 1 ? 'mb-6' : 'mb-0'} ${index === content ? 'text-warnaUnggu' : ''}`}
                            >
                                <div className='flex items-center mb-2'>
                                    <img src={nav.img} alt={nav.name} className="w-7 h-7 mr-7" />
                                    <Link to={index === sideNav.length - 1 ? '/' : `/${nav.name}`}>
                                        {nav.title}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >

    );
};

export default Sidebar;
