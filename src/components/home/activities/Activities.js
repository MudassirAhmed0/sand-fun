"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Activities = ({ arabic }) => {
  const activities = [
    {
      img: "/images/home/activities/1.jpg",
      heading: arabic
        ? "لوريم ايبسوم دولار سيت "
        : "Precision Aerobatic Formation",
      desc: arabic
        ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
        : "Precision Flight Maneuvers: Aircraft perform programmed maneuvers with precision and harmony, interspersed with individual stunts, showcasing professionalism and accuracy."
    },
    {
      img: "/images/home/activities/2.jpg",
      heading: arabic ? "لوريم ايبسوم دولار سيت " : "Complex Airshow Dynamics ",
      desc: arabic
        ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
        : "Airshow Dynamics: Powerful planes execute complex movements and acrobatics effortlessly, captivating audiences with their agility and performance."
    },
    {
      img: "/images/home/activities/3.jpg",
      heading: "Vertical & Horizontal Acrobatics  ",
      desc: "Varied Aerial Maneuvers: Horizontal and vertical rotations, spins, and inverted flying add excitement and flair to aerial displays."
    },
    {
      img: "/images/home/activities/4.jpg",
      heading: "Artistic Flight Expertise",
      desc: " Artistic Flight Expertise: Pilots need high skills to execute maneuvers resembling artistic paintings, maintaining stability through mastery and precision."
    },
    {
      img: "/images/home/activities/5.jpg",
      heading: "Artistic Flight Expertise ",
      desc: "Skilled Aerial Performances: Pilots blend expertise and artistry, executing maneuvers with precision to maintain stability throughout captivating displays."
    }
  ];
  const [cardActive, setCardActive] = useState(0);
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  });
  const handleOver = (index) => {
    !isMobile && setCardActive(index);
  };
  const handleOut = (index) => {
    !isMobile && setCardActive(index);
  };
  return (
    <>
      <div className="lg:mt-[6vw]"></div>
      <section id="activitySection">
        <div className="Container1640 lg:pb-[11.4583333333vw]  lg:pt-[8.1666666667vw] sm:py-[120px] py-[80px]">
          <h2 data-aos="fade-up" className="text64 text-[#000000]">
            Air show activities
          </h2>
          <div
            data-aos="fade"
            className="overflow-hidden w-full flex flex-col lg:flex-row gap-y-[20px] lg:gap-x-[1.04166666667vw] lg:mt-[1.25vw] mt-[20px]"
          >
            {activities.map((activity, index) => (
              <div
                key={index}
                onMouseOver={() => {
                  handleOver(index);
                }}
                onMouseEnter={() => {
                  handleOut(index);
                }}
                className={`${
                  cardActive === index ? "active" : ""
                } activityCard lg:w-[9.79166666667vw] cursor-pointer  lg:h-[38.5416666667vw] sm:h-[50vw] h-[116vw] relative flex items-end justify-center  `}
              >
                <div className="atlwh_Full pointer-events-none">
                  <span className="card-overlay opacity-[0.3] atlwh_Full"></span>
                  <span className="activities-overlay atlwh_Full bottom-0 top-[unset] lg:h-[25.8854166667vw] h-[40%]"></span>
                  <Image
                    fill
                    src={activity.img}
                    alt="activities"
                    className={`object-cover activityImg transition-all duration-[300ms] z-[-1] ${
                      arabic
                        ? ""
                        : index == activities?.length - 1
                        ? " lg:object-[-9vw]  "
                        : ""
                    }`}
                  />
                </div>
                <div className="content relative z-[2] w-[89.630%] text-white pointer-events-none">
                  <h4 className="capitalize lg:text40 sm:mtext28 mtext22 f700">
                    {activity.heading}
                  </h4>
                  <p className="lg:text20 sm:mtext18 mtext16 lg:mt-[0.52083333333vw] mt-[8px] lg:min-h-[4.6875vw]">
                    {activity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
