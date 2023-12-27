import { useNavigate } from "react-router-dom";
import { imageLogin } from "../assets";
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

const ContentLogin = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const onsubmit = async (data) => {
        const value = {
            email: data.email,
            password: data.password,
        };

        const statement = "http://localhost:4923/api/v1/login";

        try {
            const { data } = await axiosHandler(statement, value);
            Swal.fire({
                icon: "success",
                title: "Berhasil Login",
                text: data,
            });
            reset();
            navigate("/")
        } catch (error) {
            console.log("Data Error")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data,
            })
        }
    }

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
                    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col flex-1 gap-[20px]">
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
                            type="password"
                            name="password"
                            placeholder="Kata Sandi"
                            className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                            {...register("password", {
                                required: { value: true, message: "Input field required!" },
                            })}
                        />

                        <div className="mt-[20px] w-full flex justify-center flex-1">
                            <button type="submit" className="flex flex-1 justify-center py-3 rounded-[20px] bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] font-poppins font-semibold text-white text-[20px]">Masuk</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContentLogin