import { logocircle } from "../assets";

const Footer = () => {
  return (
    <section className="flex md:flex-row flex-col mt-[100px]">
      <div className="flex-1 flex-col flex justify-center md:items-center items-start text-center py-10">
        <div className="mb-10 text-center">
          <img src={logocircle} alt="logo" className="w-[75%] h-auto mx-auto md:w-[95%] md:h-[95%]" />
        </div>
        <p className="font-poppins font-bold text-[22px] sm:leading-[45px] leading-[37px]">
          Kami berkomitmen untuk terus dapat memberikan manfaat maksimal <br /> install aplikasi kami sekarang! bagi apotek independen di seluruh Indonesia.
        </p>
      </div>
    </section>
  );
};

export default Footer;
