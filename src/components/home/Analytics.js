"use client";
import React, { useEffect } from "react";
import Analytic from "./Analytic";

const Analytics = ({ arabic }) => {
  const analytics = [
    {
      number: "1,100",
      text: arabic
        ? "لوريم ايبسوم دولار سيت أميت"
        : "Our skilled guest speakers"
    },
    {
      number: "2,100",
      text: arabic ? "لوريم ايبسوم دولار سيت أميت" : "Global tech exhibitors"
    },
    {
      number: "410,000",
      text: arabic ? "لوريم ايبسوم دولار سيت أميت" : "Attendance over 4 days"
    }
  ];
  useEffect(() => {
    document.querySelectorAll(".count").forEach(function (element) {
      const counter = { value: 0 };
      const endValue = parseInt(element.textContent.replace(/,/g, ""), 10);

      function animate() {
        const duration = 3000;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const value = Math.ceil(progress * endValue);
          element.textContent = value.toLocaleString("en");

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
      }

      animate();
    });
  }, []);
  return (
    <div className="bg-[#1A1C1F] text-white">
      <div className="lg:mt-[-7.34375vw] relative z-[2] Container1640 flex justify-center flex-wrap lg:gap-[2.08333333333vw] sm:gap-[25px] gap-[15px] items-stretch">
        {analytics.map((analytic, index) => (
          <Analytic analytic={analytic} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Analytics;
