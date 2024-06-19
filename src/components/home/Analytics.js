import React from "react";
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
