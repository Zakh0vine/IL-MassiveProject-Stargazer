import { application } from "../assets";
import { playstore } from "../assets";

const Download = () => {
  return (
    <section className="flex mt-[100px]">
      <div className="flex-1 flex-col flex justify-center items-center text-center py-10">
        <h4 className="font-poppins font-bold text-[40px] mb-2">Unduh Aplikasi</h4>
        <p className="font-poppins font-bold text-[22px] sm:leading-[45px] leading-[37px]">
          Selangkah lebih dekat menuju kemudahan, <br /> install aplikasi kami sekarang!
        </p>
        <div className="mb-10 text-center">
          <img src={playstore} alt="playstore" className="w-[75%] h-auto mx-auto md:w-[95%] md:h-[95%]" />
        </div>
        <div className="mb-10 text-center">
          <img src={application} alt="application" className="w-[75%] h-auto mx-auto md:w-[100%] md:h-[100%]" />
        </div>
      </div>
    </section>
  );
};

export default Download;
