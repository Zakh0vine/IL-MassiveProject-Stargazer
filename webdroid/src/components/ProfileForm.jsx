import { arrowleft, profile, edit } from "../assets";
import { Button, InputText } from "../components";

const ProfileForm = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-center">
        <div className="lg:flex hidden flex-row">
          <a href="/" className=" py-[26px] px-5 ">
            <img src={arrowleft} alt="back" />
          </a>
          <h3 className="font-poppins font-bold text-[30px] md:pr-[250px] py-5">Profile</h3>
        </div>
        <div className="relative  w-20 h-20">
          <img className="w-full h-full" src={profile} alt="photoprofile" />
          <div className="absolute bottom-0 right-0">
            <a href="/blank">
              <img src={edit} alt="edit" className=" h-7 w-7" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <form action="#" method="post" className="flex flex-col flex-1 gap-[15px] mx-5">
          <div className="flex md:flex-row flex-col gap-[15px]">
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm font-medium">Nama Depan</label>
              <InputText type="text" name="firstName" placeholder="Anik" py="10px" px="16px" />
            </div>
            <div className="flex flex-col">
              <label className=" text-gray-600 text-sm font-medium">Nama Belakang</label>
              <InputText type="text" name="lastName" placeholder="Puji Rahayu" py="10px" px="16px" />
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col ">
              <label className=" text-gray-600 text-sm font-medium">Email</label>
              <InputText type="email" name="email" placeholder="anik@gmail.com" py="10px" px="16px" />
            </div>
            <div className="flex flex-col">
              <label className=" text-gray-600 text-sm font-medium">Nomor HP</label>
              <InputText type="text" name="noHp" placeholder="+62 82123456789" py="10px" px="16px" />
            </div>
            <div className="flex flex-col">
              <label className=" text-gray-600 text-sm font-medium">Kata sandi</label>
              <InputText type="password" name="password" placeholder="SandiYangKuatBerasalDariObatYangHebat" py="10px" px="16px" />
            </div>
            <div className="flex flex-col w-1/2">
              <label className=" text-gray-600 text-sm font-medium">Kota</label>
              <InputText type="kota" name="kota" placeholder="Jakarta" py="10px" px="16px" />
            </div>
          </div>

          <div className="mt-[20px] w-[140px] flex justify-center flex-1">
            <button type="submit" className="flex flex-1 justify-center py-[0.35rem] rounded-[10px] bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] font-poppins font-semibold text-white text-[20px]">Edit Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
