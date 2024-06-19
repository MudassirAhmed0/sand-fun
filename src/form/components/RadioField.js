import React from "react";

const RadioField = ({ error, placeholder, options, id, handleChange }) => {
  return (
    <div className="w-full flex flex-col">
      <span className="text22 font-[500] lg:py-[0.91145833333vw] py-[11.5px]">
        {placeholder}
      </span>
      <div className="flex flex-col gap-y-[15px] lg:gap-y-[0.826vw] ">
        {options?.map((item, index) => (
          <div key={index} className="radioWrapper">
            <input
              onChange={handleChange}
              type="radio"
              name={id}
              id={item?.value}
            />
            <label htmlFor={item?.value}>{item?.placeholder}</label>
          </div>
        ))}
      </div>
      {error && (
        <span className="text18 z-[2]  relative mt-[0.2vw] text-red-600 font-[500]">
          {error}
        </span>
      )}
    </div>
  );
};

export default RadioField;
