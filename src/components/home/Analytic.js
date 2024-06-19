"use client";
import React, { useEffect, useRef, useState } from "react";

const Analytic = ({ analytic, index }) => {
  //   const ref = useRef(null);
  //   const [hasAnimated, setHasAnimated] = useState(false);
  //   const [count, setCount] = useState(0);

  //   const isInViewport = () => {
  //     const rect = ref.current.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   };

  //   const animateNumber = () => {
  //     let start = 0;
  //     const end = analytic.number;
  //     const duration = 1000; // in milliseconds
  //     const range = end - start;
  //     let startTime = null;

  //     const step = (timestamp) => {
  //       if (!startTime) {
  //         startTime = timestamp;
  //       }
  //       const progress = timestamp - startTime;
  //       const percentage = Math.min(progress / duration, 1);
  //       setCount(Math.floor(percentage * range));
  //       if (progress < duration) {
  //         window.requestAnimationFrame(step);
  //       }
  //     };

  //     window.requestAnimationFrame(step);
  //   };

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (ref.current && !hasAnimated) {
  //         const currentlyInView = isInViewport();
  //         if (currentlyInView && !hasAnimated) {
  //           setHasAnimated(true);
  //           animateNumber();
  //           window.removeEventListener("scroll", handleScroll);
  //         }
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [hasAnimated]);
  return (
    <div
      //   ref={ref}
      data-aos="fade"
      data-aos-anchor="#heading"
      data-aos-delay={(index + 1) * 200}
      className="lg:w-[27.0833333333vw] sm:w-[40%] w-full flex justify-center bg-[#FFFFFF1A] border40 text-center lg:py-[2.734375vw] sm:py-[40px] py-[30px]"
    >
      <div className="lg:w-[22.9166666667vw] w-[87%]">
        <span className="lg:text-[5vw] lg:leading-[5.88541666667vw] f900 text128">
          {analytic.number}
        </span>
        <span className=" lg:text24 mtext16 f600 block lg:mt-[0.88541666666vw] mt-[7px]">
          {analytic.text}
        </span>
      </div>
    </div>
  );
};

export default Analytic;
