import { arrowleft, profile, edit } from "../assets";
import { Button, InputText } from "../components";

const ProfileForm = () => {
  return (
    <div className="flex py-10 md:flex-row">
      {/* Profile Form */}
      <div className={`flex-1`}>
        <div className="flex flex-row">
          <a href="#" className="py-1 px-5">
            <img src={arrowleft} alt="back" />
          </a>
          <h3 className="font-poppins font-bold text-[30px]">Profile</h3>
          <a href="#" className="flex-col justify-end">
            <img src={profile} alt="photoprofile" />
          </a>
        </div>

        <div className="mt-[25px] w-[60%]">
          <form action="#" method="post" className="flex flex-col flex-1 gap-[10px] mx-5">
            <InputText type="text" name="firstName" placeholder="Anik" py="10px" px="16px" />
            <InputText type="text" name="lastName" placeholder="Puji Rahayu" py="10px" px="16px" />
            <InputText type="email" name="email" placeholder="anik@gmail.com" py="10px" px="16px" />
            <InputText type="text" name="noHp" placeholder="+62 82123456789" py="10px" px="16px" />
            <InputText type="password" name="password" placeholder="SandiYangKuatBerasalDariObatYangHebat" py="10px" px="16px" />
            <InputText type="kota" name="kota" placeholder="Jakarta" py="10px" px="16px" />

            <div className="mt-[20px] w-full flex justify-center flex-1">
              <Button link="#" text="Edit Profile" customClass="flex flex-1 justify-center py-3" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
