"use client";
import useAos from "@/hooks/useAos";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
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

  const [fixedHeaderHeight, setFixedHeaderHeight] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  const [hash, setHash] = useState("");
  const fixedHeader = useRef(null);
  const [Links, setLinks] = useState([
    {
      id: "homeSection",
      linktext: arabic ? "الصفحة الرئيسية" : "Home",
      y: 0
    },
    {
      id: "aboutSection",
      linktext: arabic ? "من نحن" : "About us",
      y: 0
    },
    {
      id: "activitySection",
      linktext: arabic ? "أنشطة العرض الجوي" : "Airshow activities",
      y: 0
    },
    {
      id: "joinusSection",
      linktext: arabic ? "انضم إلينا" : "Join us",
      y: 0
    }
  ]);

  useEffect(() => {
    const hashTag = window.location.hash;
    setHash(hashTag);
    if (hashTag) {
      scrollToElement(hashTag.slice(1) + "Section");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setFixedHeaderHeight(
        document.querySelector("#fixedHeader > div").offsetHeight
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleFixedHeader = () => {
      let offset = 400;
      let scrollTop = window.scrollY;
      if (fixedHeader?.current) {
        if (scrollTop > offset) {
          // fixedHeader.current.classList.add("fixedActive");
          fixedHeader.current.style.maxHeight = fixedHeaderHeight + "px";
        } else {
          // fixedHeader.current.classList.remove("fixedActive");
          fixedHeader.current.style.maxHeight = 0;
        }

        const activeLinkId = Links.reduce((acc, curr) => {
          if (scrollTop + 50 >= curr.y) {
            acc = curr.id;
          }
          return acc;
        }, null);
        setActiveLink(activeLinkId);
      }
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => window.removeEventListener("scroll", handleFixedHeader);
  }, [fixedHeaderHeight]);
  function toggleSidebar() {
    if (window.innerWidth < 730) {
      const body = document.querySelector("body");
      const sideBar = document.querySelector(".sideBar");
      const menu = document.querySelector(".menu");
      body.classList.toggle("active");
      sideBar.classList.toggle("active");
      menu.classList.toggle("active");
    }
  }

  useEffect(() => {
    if (fixedHeaderHeight) {
      const prevLinks = Links;
      Links.forEach((link, index) => {
        const yOffset = -fixedHeaderHeight;
        const element = document.getElementById(link.id);
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        prevLinks[index].y = y;
      });
      setLinks(prevLinks);
    }
  }, [fixedHeaderHeight]);

  const scrollToElement = (id) => {
    const yOffset = -fixedHeaderHeight; // Adjust this value according to your offset
    const element = document.getElementById(id);

    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const pathname = usePathname();
  let newPath = pathname.includes("/ar/")
    ? pathname.replace("/ar", "/en")
    : pathname == "/ar"
    ? pathname.replace("/ar", "/en")
    : "/ar" + pathname;
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  newPath = page ? newPath + "?page=" + page : newPath;

  const router = useRouter();
  const handleLang = () => {
    // console.log(newPath);
    router.push(newPath || "/");
  };
  return (
    <>
      <header className="atlwh_Full h-[unset] z-[99]">
        <div className="flex items-center justify-between lg:px-[7.29166666667vw] px-[20px] lg:pt-[0.98958333333vw] pt-[20px]">
          <div
            className={`flex items-center lg:gap-x-[5.10416666667vw]  grow-[1] sm:grow-[unset]  gap-x-[30px]  ${
              arabic ? "ml-[20px]" : "mr-[20px]"
            }`}
          >
            <Link
              href="#"
              className="relative z-[2] block lg:w-[7.13541666667vw] lg:h-[5.9375vw] w-[85px] h-[70px]"
            >
              <Image fill src="/images/icons/logo.svg" alt="logo" />
            </Link>
            <nav
              className={`${
                arabic ? "mr-auto" : "ml-auto"
              } lg:m-[unset] text-white capitalize lg:block flex items-center gap-x-[15px]`}
            >
              <ul className="sideBar w-full lg:w-[unset] h-[100vh] lg:h-[unset] fixed top-0 lrf1 lg:static lg:text21 mtext18 f500 flex flex-col lg:flex-row justify-center lg:px-[unset] px-[20px] lg:gap-x-[2.91666666667vw] gap-y-[20px]">
                {Links?.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      scrollToElement(link.id);
                      setActiveLink(link.id);
                      toggleSidebar();
                      setHash("#" + link.id.replace("Section", ""));
                      window.location.hash = link.id.replace("Section", "");
                    }}
                    className={`cursor-pointer hover:text-[#f62d17] transition-all lg:border-0 border-b border-white lg:pb-[unset] pb-[10px] ${
                      !activeLink && index == 0
                        ? "text-[#f62d17]"
                        : activeLink === link.id
                        ? "text-[#f62d17]"
                        : ""
                    }`}
                  >
                    <span>{link.linktext}</span>
                  </li>
                ))}
                <li
                  onClick={() => {
                    handleLang();
                  }}
                  className={`hover:text-[#f62d17] cursor-pointer lg:block hidden ${
                    arabic ? "raleway" : "cairo"
                  }`}
                >
                  <span> {!arabic ? "العربية" : "English"}</span>
                </li>
              </ul>
              <div className="relative z-[2] flex lg:hidden items-center gap-x-[15px]">
                <span
                  onClick={() => {
                    handleLang();
                  }}
                  className={`mtext16  ${arabic ? "raleway" : "cairo"}`}
                >
                  {!arabic ? "العربية" : "English"}
                </span>
                <span className="w-[1px] h-[20px] bg-white block  "></span>
              </div>

              <div
                onClick={toggleSidebar}
                className="hidden lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
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
      <header
        ref={fixedHeader}
        id="fixedHeader"
        className="atlwh_Full h-[unset] z-[99] fixed  max-h-[0] transition-all duration-300 overflow-hidden"
      >
        <div className="flex items-center justify-between bg-white lg:px-[7.29166666667vw] px-[20px] lg:py-[0.58958333333vw] py-[6px]">
          <div
            className={`flex items-center lg:gap-x-[5.10416666667vw]  grow-[1] sm:grow-[unset]  gap-x-[30px]  ${
              arabic ? "ml-[20px]" : "mr-[20px]"
            }`}
          >
            <Link
              href="#"
              className="relative z-[2] block lg:w-[4.99479166667vw] lg:h-[4.15625vw] w-[75px] h-[60px]"
            >
              <Image fill src="/images/icons/footer-logo.svg" alt="logo" />
            </Link>
            <nav
              className={`${
                arabic ? "mr-auto" : "ml-auto"
              } lg:m-[unset]  capitalize lg:block flex items-center gap-x-[15px]`}
            >
              <ul className="sideBar w-full lg:w-[unset] h-[100vh] lg:h-[unset] fixed top-0 lrf1 lg:static lg:text21 mtext18 f500 flex flex-col lg:flex-row justify-center lg:px-[unset] px-[20px] lg:gap-x-[2.91666666667vw] gap-y-[20px]">
                {Links?.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      scrollToElement(link.id);
                      setActiveLink(link.id);
                      toggleSidebar();
                      setHash("#" + link.id.replace("Section", ""));
                      window.location.hash = link.id.replace("Section", "");
                    }}
                    className={`cursor-pointer hover:text-[#f62d17] transition-all lg:border-0 border-b border-white lg:pb-[unset] pb-[10px] ${
                      !activeLink && index == 0
                        ? "text-[#f62d17]"
                        : activeLink === link.id
                        ? "text-[#f62d17]"
                        : ""
                    }`}
                  >
                    <span>{link.linktext}</span>
                  </li>
                ))}
                <li
                  onClick={() => {
                    handleLang();
                  }}
                  className={`hover:text-[#f62d17] cursor-pointer lg:block hidden ${
                    arabic ? "raleway" : "cairo"
                  }`}
                >
                  <span> {!arabic ? "العربية" : "English"}</span>
                </li>
              </ul>
              <div className="relative z-[2]  flex lg:hidden items-center gap-x-[15px]">
                <span
                  onClick={() => {
                    handleLang();
                    toggleSidebar();
                  }}
                  className={`mtext16  ${arabic ? "raleway" : "cairo"}`}
                >
                  {!arabic ? "العربية" : "English"}
                </span>
                <span className="w-[1px] h-[20px] bg-black block  "></span>
              </div>

              <div
                onClick={toggleSidebar}
                className="hidden lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
              >
                <span className="top-0"></span>
                <span className="top-[30%]"></span>
                <span className="top-[60%]"></span>
              </div>
            </nav>
          </div>
          <Link
            href="#"
            className="relative block lg:w-[3.92875vw] lg:h-[4.58791666667vw] w-[44px] h-[55px]"
          >
            <Image fill src="/images/icons/logo2-color.png" alt="logo" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
