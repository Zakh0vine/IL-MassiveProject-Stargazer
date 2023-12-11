import { Link, useNavigate } from "react-router-dom"
import { imageLogin } from "../assets"
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const axiosHandler = async (url, data) => await axios.post(url, data);

const errorMessageDsplay = (text) => (
    <p
        style={{
            color: "red",
            fontSize: 12,
            marginTop: 0,
            paddingTop: 0,
            marginLeft: 5,
            marginBottom: 10,
            fontWeight: "bold",
        }}
    >
        {text}
    </p>
);

const ContentRegis = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate();


    const onsubmit = async (data) => {
        const value = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password,
            confPassword: data.confPassword,
        };

        const statement = "http://localhost:4923/api/v1/register";

        try {
            const { data } = await axiosHandler(statement, value);
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: data,
            });
            reset();
            navigate("/login")
        } catch (error) {
            console.log("Data Error")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data,
            });
        }
    };

    return (
        <div className='flex md:flex-row flex-col'>

            {/* Image Content */}
            <div className='flex-1 lg:flex hidden items-center relative my-0'>
                <img src={imageLogin} alt="medisPicture" className='w-[95%] h-[95%] relative' />
            </div>

            {/* Register Content Form */}
            <div className={`flex-1 flex-col flex justify-center items-center text-center`}>
                <h3 className='font-poppins font-bold text-[30px]'>Buat Akun Baru.</h3>
                <p className='font-poppins font-medium text-[20px] sm:leading-[45px] leading-[37px]'>Sudah punya akun? <Link to="/login" className="text-[#2E56BD]">Masuk.</Link></p>

                <div className="mt-[25px] w-[60%]">
                    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col flex-1 gap-[10px] mx-5">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Nama Depan"
                            className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                            {...register("firstName", {
                                required: { value: true, message: "Input field required!" },
                            })}
                        />
                        {errors.name && errors.name.message
                            ? errorMessageDsplay(errors.name.message)
                            : null}
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Nama Belakang"
                            className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                            {...register("lastName", {
                                required: { value: true, message: "Input field required!" },
                            })}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                            {...register("email", {
                                required: { value: true, message: "Input field required!" },
                            })}
                        />
                        <input
                            type="number"
                            name="phoneNumber"
                            placeholder="Nomor Telepon"
                            className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                            {...register("phoneNumber", {
                                required: { value: true, message: "Input field required!" },
                            })}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Kata Sandi"
                            className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                            {...register("password", {
                                required: { value: true, message: "Input field required!" },
                            })}
                        />
                        <input
                            type="password"
                            name="confPassword"
                            placeholder="Konfirmasi Kata Sandi"
                            className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                            {...register("confPassword", {
                                required: { value: true, message: "Input field required!" },
                            })}
                        />

                        <div className="flex justify-center items-start w-full sm:gap-[15px] gap-2 sm:mx-5">
                            <input type="checkbox" name="agree" id="agree" className="w-[30px] h-[30px]" />
                            <p className="font-poppins text-[14px] font-medium text-start">Saya setuju untuk mengikuti Syarat dan Ketentuan serta Kebijakan Privasi</p>
                        </div>

                        <button type="submit" className="flex flex-1 mt-[20px] w-full justify-center py-3 rounded-[20px] bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] font-poppins font-semibold text-white text-[20px]">Buat Akun</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContentRegis