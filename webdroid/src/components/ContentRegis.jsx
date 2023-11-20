import { pharmacy } from "../assets"
import { Button, InputText } from "../components"

const ContentRegis = () => {

    return (
        <div className='flex md:py-16 py-10 md:flex-row flex-col'>

            <div className='flex-1 md:flex hidden items-center relative my-0'>
                <img src={pharmacy} alt="medisPicture" className='w-[95%] h-[95%] relative' />
            </div>

            <div className={`flex-1 flex-col flex justify-center items-center text-center`}>
                <h3 className='font-poppins font-bold text-[30px]'>Selamat Datang!</h3>
                <p className='font-poppins font-medium text-[20px] sm:leading-[45px] leading-[37px]'>Mari kelola stok obat dengan lebih baik</p>

                <div className="mt-[45px] w-[55%]">
                    <form action="#" method="post" className="flex flex-col flex-1 gap-[20px]">
                        <InputText type="email" name="email" placeholder="E-Mail" height="55px" />
                        <InputText type="password" name="password" placeholder="Kata Sandi" height="55px" />

                        <div className="mt-[20px]">
                            <Button link="#" text="Masuk" px="px-[145px]" py="py-4" />
                        </div>
                    </form>
                </div>
            </div>

            <div className={`flex-1 flex-col hidden justify-center items-center text-center`}>
                <h3 className='font-poppins font-bold text-[30px]'>Buat Akun Baru.</h3>
                <p className='font-poppins font-medium text-[20px] sm:leading-[45px] leading-[37px]'>Sudah punya akun? <a href="#" className="text-[#2E56BD]">Masuk.</a></p>

                <div className="mt-[25px] w-[55%]">
                    <form action="#" method="post" className="flex flex-col flex-1 gap-[10px]">
                        <InputText type="text" name="firstName" placeholder="Nama Depan" py="10px" px="16px" />
                        <InputText type="text" name="lastName" placeholder="Nama Belakang" py="10px" px="16px" />
                        <InputText type="email" name="email" placeholder="E-Mail" py="10px" px="16px" />
                        <InputText type="text" name="noHp" placeholder="No HP" py="10px" px="16px" />
                        <InputText type="password" name="password" placeholder="Kata Sandi" py="10px" px="16px" />
                        <InputText type="password" name="passwordConfirm" placeholder="Konfirmasi Kata Sandi" py="10px" px="16px" />

                        <div className="flex justify-center items-start w-full gap-[15px] mx-5">
                            <input type="checkbox" name="agree" id="agree" className="w-[30px] h-[30px]" />
                            <p className="font-poppins text-[14px] font-medium text-start">Saya setuju untuk mengikuti Syarat dan Ketentuan serta Kebijakan Privasi</p>
                        </div>

                        <div className="mt-[20px]">
                            <Button link="#" text="Buat Akun" px="px-[125px]" py="py-3" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContentRegis