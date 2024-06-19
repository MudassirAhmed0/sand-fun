import Image from "next/image";
import Link from "next/link";
import React from "react";
const socialHandles = [
  {
    img: "/images/icons/social/fb.svg",
    link: "https://www.facebook.com/",
    alt: "fb",
  },
  {
    img: "/images/icons/social/twitter.svg",
    link: "https://www.facebook.com/",
    alt: "twitter",
  },
  {
    img: "/images/icons/social/linkedin.svg",
    link: "https://www.linkedin.com/",
    alt: "linkedin",
  },
  {
    img: "/images/icons/social/insta.svg",
    link: "https://www.insta.com/",
    alt: "insta",
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#1A1C1F]">
      <div className="Container1640">
        <div className="flex justify-between items-end lg:py-[1.5625vw] py-[25px] border-b border-[#FFFFFF33]">
          <Link
            href="#"
            className="relative block lg:w-[6.61458333333vw] lg:h-[5.46875vw] w-[85px] h-[70px]"
          >
            <Image fill src="/images/icons/footer-logo.svg" alt="logo" />
          </Link>
          <div className="flex lg:gap-x-[1.14583333333vw] sm:gap-x-[20px] gap-x-[15px] items-center">
            {socialHandles.map((socialHandle, index) => (
              <Link
                key={index}
                href={socialHandle.link}
                className="opacity_Hover relative block lg:w-[1.5625vw] lg:h-[1.5625vw] w-[20px] h-[20px]"
              >
                <Image fill src={socialHandle.img} alt={socialHandle.alt} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-[6px] justify-center lg:gap-x-[0.2vw] lg:py-[1.015625vw] py-[10px] lg:text16 mtext14 text-center text-white">
          <span>© 2024 Copyright www.sandnfun.com All Rights Reserved</span>
          <a
            href="https://brackets-tech.com/"
            target="_blank"
            className="f300 opacity_Hover"
          >
            Developed by Brackets Technology
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
