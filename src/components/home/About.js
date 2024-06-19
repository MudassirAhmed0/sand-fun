import React from "react";
import Image from "next/image";

const About = ({ arabic }) => {
  return (
    <section className="bg-[#1A1C1F] flex lg:justify-start justify-center">
      <div className="lg:pt-[8.125vw] lg:pb-[unset] sm:py-[120px] py-[80px] relative lg:bottom-[-3.33333333333vw] lg:w-[92.9166666667vw] sm:w-[90%] w-[88%] flex flex-wrap items-center sm:gap-y-[30px] gap-y-[20px] lg:gap-x-[5.20833333333vw]">
        <div
          data-aos="fade"
          data-aos-delay="300"
          className="flex justify-end relative w-full h-[67vw] lg:w-[45.8854166667vw] lg:h-[40.5208333333vw]"
        >
          <div className="relative lg:w-[33.3854166667vw] w-full h-full">
            <Image
              fill
              src="/images/home/about/banner.jpg"
              alt="about"
              className="object-cover"
            />
          </div>
          <div className="absolute lrf1 bottom-0 lg:w-[10.3645833333vw] lg:h-[34.5833333333vw]">
            <Image
              fill
              src="/images/home/about/banner.jpg"
              alt="about"
              className="object-cover object-[-6.25vw]"
            />
          </div>
        </div>
        <div className="lg:w-[41.6666666667vw] text-white">
          <h2 data-aos="fade-up" className="text64">
            {arabic ? "لوريم ايبسوم دولار سيت " : "About Sand & Fun"}
          </h2>
          <div
            data-aos="fade-down"
            className={`${
              arabic ? "f500 lg:text21" : "f400 lg:text20"
            } mt48 flex flex-col lg:gap-y-[1.5625vw] gap-y-[24px] text-white text-opacity-[0.7]  mtext16`}
          >
            <p>
              {arabic
                ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيك"
                : "For the sixth year, the Sand & Fun – General Aviation Airshow represents a unique and specific event in the Kingdom, organized by the Saudi Aviation Club at Al- Thumama Airport in Riyadh, to be the first destination for aviation professionals, amateurs, and aviation activities. Sand & Fun is the only show of its kind in the whole region, making Riyadh the meeting point for aviation enthusiast."}
            </p>
            <p>
              {arabic
                ? "تيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكأليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور"
                : "The show will satisfy the passion of many professionals and hobbyists alike in the presence of these specialized quality activities. The show aims to engage the youth in the field of aviation and contribute to promoting aviation culture and sciences among people of all ages."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
