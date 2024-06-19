import React from "react";

const TextAreaField = ({
  error,
  widthHalf,
  type,
  placeholder,
  value,
  handleChange,
  id
}) => {
  return (
    <div
      className={`inputWrapper  relative flex flex-col ${
        widthHalf ? "lg:w-[24.0625vw] w-full " : "w-full"
      }`}
    >
      <textarea
        autoComplete="off"
        value={value}
        onChange={handleChange}
        id={id}
        placeholder={placeholder}
        className=" textareaField"
      ></textarea>
      {error && (
        <span className="text18 z-[2]  relative mt-[0.2vw] text-red-600 font-[500]">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextAreaField;
