"use client";
import useAos from "@/hooks/useAos";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function toggleSidebar() {
  if (window.innerWidth < 1024) {
    const body = document.querySelector("body");
    const sideBar = document.querySelector(".sideBar");
    const menu = document.querySelector(".menu");
    body.classList.toggle("active");
    sideBar.classList.toggle("active");
    menu.classList.toggle("active");
  }
}
const Header = ({ arabic }) => {
  useAos();
  const links = [
    {
      linktext: arabic ? "الصفحة الرئيسية" : "Home",
      link: "/"
    },
    {
      linktext: arabic ? "من نحن" : "About us",
      link: "/"
    },
    {
      linktext: arabic ? "أنشطة العرض الجوي" : "Airshow activities",
      link: "/"
    },
    {
      linktext: arabic ? "انضم إلينا" : "Join us",
      link: "/"
    }
  ];
  return (
    <header className="atlwh_Full h-[unset] z-[99]">
      <div className="flex items-center justify-between lg:px-[7.29166666667vw] px-[20px] lg:pt-[0.98958333333vw] pt-[20px]">
        <div className="flex items-center lg:gap-x-[5.10416666667vw] gap-x-[30px]">
          <Link
            href="#"
            className="relative z-[2] block lg:w-[7.13541666667vw] lg:h-[5.9375vw] w-[85px] h-[70px]"
          >
            <Image fill src="/images/icons/logo.svg" alt="logo" />
          </Link>
          <nav className="lg:m-[unset] text-white capitalize lg:block flex items-center gap-x-[15px]">
            <ul className="sideBar w-full lg:w-[unset] h-[100vh] lg:h-[unset] absolute top-0 lrf1 lg:static lg:text21 mtext18 f500 flex flex-col lg:flex-row justify-center lg:px-[unset] px-[20px] lg:gap-x-[2.91666666667vw] gap-y-[20px]">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="opacity_Hover lg:border-0 border-b border-white lg:pb-[unset] pb-[10px]"
                >
                  <Link href={link.link}>{link.linktext}</Link>
                </li>
              ))}
              <li
                className={`opacity_Hover lg:block hidden ${
                  arabic ? "raleway" : "cairo"
                }`}
              >
                <Link href={!arabic ? "/ar/" : "/en/"}>
                  {" "}
                  {!arabic ? "العربية" : "English"}
                </Link>
              </li>
            </ul>
            <div className="relative z-[2] flex lg:hidden items-center gap-x-[15px]">
              <Link
                href={!arabic ? "/ar/" : "/en/"}
                className={`mtext16  ${arabic ? "raleway" : "cairo"}`}
              >
                {!arabic ? "العربية" : "English"}
              </Link>
              <span className="w-[1px] h-[20px] bg-white block  "></span>
            </div>

            <div
              onClick={toggleSidebar}
              className="block lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
            >
              <span className="top-0"></span>
              <span className="top-[30%]"></span>
              <span className="top-[60%]"></span>
            </div>
          </nav>
        </div>
        <Link
          href="#"
          className="relative block lg:w-[4.82875vw] lg:h-[5.78791666667vw] w-[44px] h-[55px]"
        >
          <Image fill src="/images/icons/logo2.svg" alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
