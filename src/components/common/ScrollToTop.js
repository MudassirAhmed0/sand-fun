"use client";
import useScrollProgress from "../hooks/useScrollProgress";

const ScrollToTop = () => {
  useScrollProgress();
  return (
    <>
      <div className="circle-container w-[20px] hidden">
        <svg
          className="circle-progress svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
        <div className="">
          <img src="/images/icons/scrolltotop.svg" alt="Scroll TOp" />
        </div>
      </div>
    </>
  );
};

export default ScrollToTop;
