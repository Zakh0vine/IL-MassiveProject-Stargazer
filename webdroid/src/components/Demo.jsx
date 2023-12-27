import { videoShowCase } from "../assets";

const Demo = () => {
  return (
    <div className="flex flex-1 h-[850px]">
      <div className="flex-1 flex-col flex justify-start items-center text-center md:h-[450px]">
        <p className="font-poppins font-bold text-[30px] sm:leading-[45px] leading-[37px]">
          Inilah alasan mengapa harus menggunakan
          <span className="text-[#2E56BD]"> Medistok</span>
        </p>
        <div className="flex flex-1 justify-center mt-10 rounded-md shadow-2xl border-slate-500">
          <div className="w-full h-full">
            <video controls src={videoShowCase} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
