import React from "react";

const InputField = ({
  error,
  widthHalf,
  type,
  placeholder,
  value,
  handleChange,
  id
}) => {
  const handleKeyDown = (e) => {
    if (type == "number") {
      if (e.key.toLowerCase() === "e") {
        e.preventDefault();
      }
    }
  };
  return (
    <div
      className={`inputWrapper  relative flex flex-col ${
        widthHalf ? "lg:w-[18.8194444444vw] w-full " : "w-full"
      }`}
    >
      <input
        autoComplete="off"
        onKeyDown={handleKeyDown}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        id={id}
        className=" inputField"
      />
      {error && (
        <span className="text18 z-[2]  relative mt-[0.2vw] text-red-600 font-[500]">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
