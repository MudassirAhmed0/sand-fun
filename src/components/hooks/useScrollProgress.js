import React, { useEffect } from "react";

const useScrollProgress = () => {
  useEffect(() => {
    let offset = 400;
    let circleContainer = document.querySelector(".circle-container");
    let circlePath = document.querySelector(".circle-container path");
    let pathLength = circlePath.getTotalLength();
    circlePath.style.transition = circlePath.style.WebkitTransition = "none";
    circlePath.style.strokeDasharray = pathLength;
    circlePath.style.strokeDashoffset = pathLength;
    circlePath.getBoundingClientRect();
    circlePath.style.transition = circlePath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    let updateLoader = () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let height = docHeight - winHeight;
      let progress = pathLength - (scrollTop * pathLength) / height;
      circlePath.style.strokeDashoffset = progress;
      const cta = document.querySelector(".btn__Global");
      if (cta) {
        if (scrollTop > window.innerHeight) {
          cta.classList.add("show");
        } else {
          cta.classList.remove("show");
        }
      }

      if (scrollTop > offset) {
        circleContainer.classList.add("active");
      } else {
        circleContainer.classList.remove("active");
      }
    };

    circleContainer.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.onscroll = () => {
      updateLoader();
    };

    updateLoader();
  }, []);
};

export default useScrollProgress;
