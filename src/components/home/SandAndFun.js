import React from "react";

const SandAndFun = ({ arabic }) => {
  return (
    <div
      style={{
        "--fun-background-img": 'url("/images/home/fun.jpg")'
      }}
      className="relative w-full funSection lg:h-[58.90625vw] h-[100vh] flex justify-center lg:justify-end items-center lg:items-start lg:pt-[14.1145833333vw] "
    >
      <span className="atlwh_Full hero-overlay2"></span>
      <div
        data-aos="fade"
        className="relative z-[2] lg:py-[2.91666666667vw] sm:py-[30px] py-[20px] lg:mx-[9.11458333333vw] lg:w-[50.9375vw] w-[87%]"
      >
        <span className="atlwh_Full hero-overlay2"></span>
        <div className="relative z-[2] w-[88.549%] mx-[auto]">
          <span className={`${arabic ? "text48" : "text64"} text-white `}>
            {arabic
              ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيتسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولاي اسم دولار سيت لوريم ايبسوم دولار سوم دولار سيت "
              : "Sand & Fun is the only show of its kind in the whole region, making Riyadh the meeting point for aviation enthusiast."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SandAndFun;
