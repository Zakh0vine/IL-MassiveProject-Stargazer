import { Link } from "react-router-dom"
import { imageLogin } from "../assets"
import { Button, InputText } from "../components"

const ContentLogin = () => {

    return (
        <div className='flex md:flex-row flex-col'>

            {/* Image Content */}
            <div className='flex-1 lg:flex hidden items-center relative my-0'>
                <img src={imageLogin} alt="medisPicture" className='w-[95%] h-[95%] relative' />
            </div>

            {/* LogIn Content Form */}
            <div className={`flex-1 flex-col flex justify-center items-center text-center lg:mt-0 mt-10`}>
                <h3 className='font-poppins font-bold text-[30px]'>Selamat Datang!</h3>
                <p className='font-poppins font-medium text-[20px] sm:leading-[45px] leading-[37px]'>Mari kelola stok obat dengan lebih baik</p>

                <div className="mt-[45px] w-[55%]">
                    <form action="#" method="post" className="flex flex-col flex-1 gap-[20px]">
                        <InputText type="email" name="email" placeholder="E-Mail" height="55px" />
                        <InputText type="password" name="password" placeholder="Kata Sandi" height="55px" />

                        <Link to="/">
                            <div className="mt-[20px]">
                                <Button link="#" text="Masuk" customClass="flex flex-1 justify-center py-3 rounded-[20px]" />
                            </div>
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContentLogin