import { Link } from "react-router-dom"
import { imageLogin } from "../assets"
import { Button, InputText } from "../components"

const ContentRegis = () => {

    return (
        <div className='flex md:flex-row flex-col'>

            {/* Image Content */}
            <div className='flex-1 lg:flex hidden items-center relative my-0'>
                <img src={imageLogin} alt="medisPicture" className='w-[95%] h-[95%] relative' />
            </div>

            {/* Register Content Form */}
            <div className={`flex-1 flex-col flex justify-center items-center text-center`}>
                <h3 className='font-poppins font-bold text-[30px]'>Buat Akun Baru.</h3>
                <p className='font-poppins font-medium text-[20px] sm:leading-[45px] leading-[37px]'>Sudah punya akun? <a href="#" className="text-[#2E56BD]">Masuk.</a></p>

                <div className="mt-[25px] w-[60%]">
                    <form action="#" method="post" className="flex flex-col flex-1 gap-[10px] mx-5">
                        <InputText type="text" name="firstName" placeholder="Nama Depan" py="10px" px="16px" />
                        <InputText type="text" name="lastName" placeholder="Nama Belakang" py="10px" px="16px" />
                        <InputText type="email" name="email" placeholder="E-Mail" py="10px" px="16px" />
                        <InputText type="text" name="noHp" placeholder="No HP" py="10px" px="16px" />
                        <InputText type="password" name="password" placeholder="Kata Sandi" py="10px" px="16px" />
                        <InputText type="password" name="passwordConfirm" placeholder="Konfirmasi Kata Sandi" py="10px" px="16px" />

                        <div className="flex justify-center items-start w-full sm:gap-[15px] gap-2 sm:mx-5">
                            <input type="checkbox" name="agree" id="agree" className="w-[30px] h-[30px]" />
                            <p className="font-poppins text-[14px] font-medium text-start">Saya setuju untuk mengikuti Syarat dan Ketentuan serta Kebijakan Privasi</p>
                        </div>

                        <Link to="/login">
                            <div className="mt-[20px] w-full flex justify-center flex-1">
                                <Button link="" text="Buat Akun" customClass="flex flex-1 justify-center py-3 rounded-[20px]" />
                            </div>
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContentRegis