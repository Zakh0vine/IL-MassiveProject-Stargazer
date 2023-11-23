import { DashPie, HorizontalBar } from '../components'

export default function DashboardCard() {
    const data = [
        { id: 'Full', value: 100 },
        { id: 'Mid', value: 80 },
        { id: 'Low', value: 20 },
    ];

    return (
        <div>
            <div className='flex px-5 lg:px-10 justify-between '>
                <div className='mb-10'>
                    <span className='text-xl font-bold'>Hello,</span> <span className='text-blue-300 text-xl'>User</span>
                    <p className='text-gray-500'>Here are your daily updates.</p>
                </div>
                <div className='text-xl font-bold lg:py-1 py-2'>
                    Dashboard
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-white gap-8 mx-5 lg:mx-10 xl:mx-20">
                {/* 1 */}
                <div className="bg-white rounded-md shadow-md w-full lg:col-span-1 col-span-2 lg:w-full w-[500px]">
                    <div className='flex flex-col justify-between m-5'>
                        <div className='flex justify-between my-2'>
                            <p className='text-lg font-semibold'>
                                Total Obat
                            </p>
                            <hr className='border-solid border-black border-b-1' />
                            <div className='w-[55px] border rounded-full px-1 text-blue-200 bg-white self-end md:mr-2 flex items-center justify-center font-bold outline outline-2'>
                                Live
                            </div>
                        </div>
                        <hr className='md:border-solid md:border-black md:border-b-1' />
                        <div className='mt-3 text-lg font-normal md:mt-0'>
                            200 Obat
                        </div>
                        <div className='flex justify-end w-full'>
                            <img src="" alt="pumyeng" className='w-[200px] h-auto' />
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className='lg:px-5 px-5 md:col-span-1 col-span-2 lg:w-full w-full '>
                    <div className="overflow-hidden lg:col-span-1 col-span-2 lg:w-full w-[400px]">
                        <img src="" alt="" className='w-full h-auto' />
                    </div>
                </div>
                {/* 3 */}
                <div className="bg-white rounded-md shadow-md w-full lg:col-span-1 col-span-2 lg:w-full w-[500px]">
                    <div className='m-5'>
                        <span className='text-lg font-semibold '>Jumlah Obat</span>
                        <hr className='mt-3 border-solid border-black border-b-1 mb-3' />
                        <div className='flex gap-5 items-center'>
                            <p>4H 18M</p>
                            <div className='w-[55px] border rounded-full text-black bg-green-400 flex justify-center 2 font-bold'>
                                5.7%
                            </div>
                        </div>
                        <div className='w-auto h-auto'>
                            <HorizontalBar />
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="flex p-5 bg-white rounded-md shadow-md lg:col-span-1 col-span-2 lg:col-span-1 col-span-2 lg:w-[350px] w-full h-auto">
                    <div className="flex flex-col w-full">
                        <div className="">
                            <span className='text-lg font-semibold'>Level Stok</span>
                            <div className='w-[150px] h-[150px]'>
                                <DashPie data={data} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mr-10'>
                        <div className='w-[55px] border rounded-full outline outline-2 px-1 text-blue-200 bg-white mb-5 self-end mr-2 flex justify-center font-bold'>
                            Live
                        </div>
                        <div className='flex gap-10 p-1 '>
                            <ul className='flex flex-col gap-2'>
                                <li className="flex items-center justify-center w-10 h-8">Full</li>
                                <li className="flex items-center justify-center w-10 h-8">Mid</li>
                                <li className="flex items-center justify-center w-10 h-8">Low</li>
                            </ul>
                            <ul className='flex flex-col gap-2'>
                                <li className="flex items-center justify-center w-15 h-8 border rounded-full text-white bg-green-400">100</li>
                                <li className="flex items-center justify-center w-20 h-8 border rounded-full text-white bg-blue-400">80</li>
                                <li className="flex items-center justify-center w-20 h-8 border rounded-full text-white bg-red-400">20</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}