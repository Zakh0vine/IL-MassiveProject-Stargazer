import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { arrowleft, edit, profile } from "../assets";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Dialog } from 'primereact/dialog';

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

const ProfileForm = ({ user }) => {

  const [input, setInput] = useState(true);
  const [visible, setVisible] = useState(false);
  const [file, setFile] = useState();

  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);

  //Foto Profile Handle
  const handleAvatar = (e) => {
    setFile(e.target.files[0]);
  }
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const { avatar } = axiosHandler('http://localhost:4923/api/v1/user/avatar', formData);
      Swal.fire({
        icon: "success",
        title: "Profile Berhasil Diubah",
        text: avatar,
      });
      setVisible(false);
      navigate("/profile", { state: { key: Math.random() } })
    } catch (error) {
      console.log("Data Error")
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
      })
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();


  const onsubmit = async (data) => {
    const value = {
      id: user.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    };

    const statement = "http://localhost:4923/api/v1/updateUser";

    try {
      const { data } = await axiosHandler(statement, value);
      Swal.fire({
        icon: "success",
        title: "Update Data Berhasil",
        text: data,
      });
      reset();
      navigate("/dashboard", { state: { key: Math.random() } })
    } catch (error) {
      console.log("Data Error")
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
      })
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-center">
        <div className="lg:flex hidden flex-row">
          <a href="/" className=" py-[26px] px-5 ">
            <img src={arrowleft} alt="back" />
          </a>
          <h3 className="font-poppins font-bold text-[30px] md:pr-[250px] py-5">Profile</h3>
        </div>
        <div className="relative w-20 h-20">
          {user.image === "" || user.image === null ?
            <img src={profile} alt="profile" className="w-[100%] h-[100%]" />
            :
            <img className="w-full h-full rounded-full ring-4 ring-[#426eb1]" src={`http://localhost:4923/avatar/` + user.image} alt="photoprofile" />
          }
          <div className="relative left-[60px] bottom-4">
            <img src={edit} alt="edit" className=" h-7 w-7 cursor-pointer" onClick={() => setVisible(true)} />
            <Dialog
              header="Update Profile"
              visible={visible}
              onHide={() => setVisible(false)}
              className="bg-slate-100 shadow-2xl lg:w-[40vw] w-[60vw] p-9 rounded-xl">
              <input type="file" className="mt-9" onChange={handleAvatar} />
              <button className="mt-5 p-2 bg-slate-400 rounded-xl" onClick={handleUpload}>Upload Image</button>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col flex-1 gap-[15px] mx-5">
          <div className="flex md:flex-row flex-col gap-[15px]">
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm font-medium">Nama Depan</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onInput={(e) => setFirstName(e.target.value)}
                className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                disabled={input}
                {...register("firstName", {
                  required: { value: true, message: "Input field required!" },
                })}
              />
            </div>
            <div className="flex flex-col">
              <label className=" text-gray-600 text-sm font-medium">Nama Belakang</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onInput={(e) => setLastName(e.target.value)}
                className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                disabled={input}
                {...register("lastName", {
                  required: { value: true, message: "Input field required!" },
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col ">
              <label className=" text-gray-600 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                disabled={input}
                {...register("email", {
                  required: { value: true, message: "Input field required!" },
                })}
              />
            </div>
            <div className="flex flex-col">
              <label className=" text-gray-600 text-sm font-medium">Nomor HP</label>
              <input
                type="text"
                name="phone_number"
                value={phoneNumber}
                onInput={(e) => setPhoneNumber(e.target.value)}
                className="border-2 border-[#b8b8b8] bg-white rounded-xl text-black py-[10px] px-4 focus:outline-none focus:border-[#6499E9] text-[15px] font-medium"
                disabled={input}
                {...register("phoneNumber", {
                  required: { value: true, message: "Input field required!" },
                })}
              />
            </div>
          </div>

          {
            input ?
              <div className="mt-[20px] w-[140px] flex justify-center flex-1">
                <h3 className="flex flex-1 justify-center py-[0.35rem] rounded-[10px] bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] font-poppins font-semibold text-white text-[20px] cursor-pointer" onClick={() => setInput((prev) => !prev)}>Edit Profile</h3>
              </div>
              :
              <div className="mt-[20px] w-[300px] gap-5 flex justify-center flex-1">
                <h3 className="flex flex-1 justify-center py-[0.35rem] rounded-[10px] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border-2 border-[#6499E9] focus:outline-none focus:ring focus:ring-[#6499E9] font-poppins font-semibold text-[#6499E9] text-[20px] cursor-pointer" onClick={() => setInput((prev) => !prev)}>Batal</h3>

                <button type="submit" className="flex flex-1 justify-center py-[0.35rem] rounded-[10px] bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] font-poppins font-semibold text-white text-[20px]">Simpan</button>
              </div>
          }
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
