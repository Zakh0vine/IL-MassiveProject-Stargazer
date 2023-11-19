import React from "react";
import { footerlogo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex flex-col items-center md:px-[120px] px-7 bg-footeratas py-6">
        <a href="/">
          <img src={footerlogo} alt="logo footer" />
        </a>
        <p className="font-poppins font-medium text-[20px] sm:leading-[45px] leading-[37px] text-center mt-6">
          Kami berkomitmen untuk terus dapat memberikan manfaat maksimal <br /> bagi apotek independen di seluruh Indonesia.
        </p>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h5 className="font-poppins text-2xl leading-normal font-bold mt-6 text-footertext hover:text-warnaUnggu">{section.title}</h5>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5 mt-8 mb-2">
          {socialMedia.map((icon) => (
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={icon.alt}>
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="py-3 text-center md:px-[120px] px-7 bg-footerbawah">
        <p className="font-poppins font-medium text-[20px] sm:leading-[45px] leading-[37px]">© 2023 Webdroid | Powered by Infinite Learning</p>
      </div>
    </footer>
  );
};

export default Footer;
