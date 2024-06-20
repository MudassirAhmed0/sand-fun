import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ arabic }) => {
  return (
    <section id="homeSection">
      <div className="h-[98vh] relative flex items-end lg:pb-[unset] pb-[120px] lg:items-center justify-center ">
        <div className="atlwh_Full overflow-hidden flipped">
          <div className="atlwh_Full">
            <span className="atlwh_Full hero-overlay1"></span>

            <video
              src="/videos/hero.mp4"
              poster="/images/home/hero/hero.jpg"
              className="atlwh_Full object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="atlwh_Full">
            <span className="atlwh_Full hero-overlay2"></span>
            <span className="atlwh_Full hero-overlay3 lg:h-[33.8020833333vw] h-[60%]"></span>
            <span className="atlwh_Full top-[unset] bottom-[-2vw] hero-overlay4 lg:h-[15.5208333333vw] h-[20%] scale-y-[-1]"></span>
          </div>
        </div>
        <div className="lg:px-[5.20833333333vw] w-full  relative z-[2] text-white flex flex-wrap lg:justify-center gap-[30px] lg:gap-x-[4.6875vw] items-center">
          <div className="lg:w-[41.5104166667vw] px-[20px] lg:px-[unset]">
            <h1 id="heading" data-aos="fade-up" className="text128">
              {arabic ? "لوريم ايبسوم" : "SAND & FUN"}
            </h1>
            <p
              data-aos="fade-down"
              className={`${
                arabic ? "lg:mt-[1.66666666667vw]" : "lg:mt-[0.41666666666vw]"
              } lg:text28 mtext18 f600  mt-[8px]`}
            >
              {arabic
                ? "لوريم ايبسوم دولار سيت أميت"
                : "19-23 Novembar 2024 ,Al Thumamah airport Saudi Arabia"}
            </p>
            <div
              data-aos="fade"
              data-aos-delay="200"
              className="lg:text21 sm:mtext18 mtext16 f600 flex flex-wrap items-center lg:gap-[1.66666666667vw] gap-[15px] lg:mt-[2.08333333333vw] mt-[25px]"
            >
              <Link
                href="/"
                className="py-[8px] px-[20px] sm:py-[12px] sm:px-[35px] block border border-[#F62D17] bg-[#F62D17] hover:border-white hover:bg-transparent transition-all duration-300 border100 lg:py-[1vw] lg:px-[2.73588541667vw]"
              >
                {arabic ? "لوريم ايبسوم دولار " : "Pre register now"}
              </Link>
              <Link
                href="/"
                className="py-[8px] px-[20px] sm:py-[12px] sm:px-[35px] block border hover:border-[#F62D17] hover:bg-[#F62D17] border-white bg-transparent transition-all duration-300 border100 lg:py-[1vw] lg:px-[2.73588541667vw]"
              >
                {arabic ? "لوريم ايبسوم" : "Exhibit 2024"}
              </Link>
            </div>
          </div>
          <div className="relative  flex lg:w-[41.8229166667vw] w-full ">
            <div
              data-aos="fade"
              data-aos-delay="400"
              className="flex justify-center items-end lg:pb-[1.77083333333vw] pb-[15px] relative lg:w-[22.0833333333vw] lg:h-[26.0416666667vw] w-[49%] h-[200px]"
            >
              <Image fill src="/images/home/hero/faisal.png" alt="faisal" />
              <div className="f500 top-[50px] lg:top-[unset] capitalize flex flex-col text-center lg:gap-y-[0.41666666666vw] items-center relative z-[2]">
                <span className=" lg:text21 mtext14 text-white text-opacity-[0.8]">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت"
                    : " His royal highness prince"}
                </span>
                <span className=" lg:text24 mtext16">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت"
                    : " Faisal Bin Bandar Al Saud"}
                </span>
              </div>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="600"
              className="absolute lrf2 flex justify-center items-end lg:pb-[1.77083333333vw] pb-[15px] lg:w-[22.0833333333vw] lg:h-[26.0416666667vw] w-[49%] h-[200px]"
            >
              <Image fill src="/images/home/hero/sultan.png" alt="sultan" />
              <div className="f500 top-[50px] lg:top-[unset] capitalize flex flex-col text-center lg:gap-y-[0.41666666666vw] items-center relative z-[2]">
                <span className=" lg:text21 mtext14 text-white text-opacity-[0.8]">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت"
                    : " His royal highness prince"}
                </span>
                <span className=" lg:text24 mtext16">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت"
                    : " Sultan Bin Salman Bin Abdulaziz"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
