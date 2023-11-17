import { videoshowcase } from "../assets";

const Demo = () => {
  return (
    <section className="flex h-[850px]">
      <div className="flex-1 flex-col flex justify-start items-center text-center">
        <p className="font-poppins font-bold text-[30px] sm:leading-[45px] leading-[37px]">
          Inilah alasan mengapa harus menggunakan
          <span className="text-[#2E56BD]"> Medistok</span>
        </p>
        <div className="flex justify-center">
          <img src={videoshowcase} alt="showCase" className="w-[200%] h-[200%] md:w-[100%] md:h-[150%]" />
        </div>
      </div>
    </section>
  );
};

export default Demo;
