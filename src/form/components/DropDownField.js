import React, { useRef } from "react";

const DropDownField = ({
  error,
  widthHalf,
  placeholder,
  value,
  id,
  setStates,
  options
}) => {
  const dropdownItemsRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const toggleDropdown = () => {
    dropdownContainerRef.current.classList.toggle("active");
  };
  const handleItemClick = (selectedVallue) => {
    setStates((prev) => {
      return { ...prev, [id]: selectedVallue };
    });
    toggleDropdown();
  };
  return (
    <div
      className={`inputWrapper  relative   flex flex-col ${
        widthHalf ? "lg:w-[24.0625vw] w-full" : "w-full"
      }`}
    >
      <div ref={dropdownContainerRef} className="relative dropdown">
        <div onClick={toggleDropdown} className="relative w-full  ">
          <input
            type={"text"}
            placeholder={placeholder}
            value={value}
            autoComplete="off"
            id={id}
            className="bg-transparent blackOp07 f500 placeholder:f500 placeholder:blackOp07 cursor-pointer dropdownCaretHider outline-none  font-[500] lg:text22 placeholder:lg:text22 placeholder:m17 m17  lg:py-[0.91145833333vw] py-[11.5px] border-b border-[#1B1C16B2] w-full"
          />
          <img
            src="/images/icons/dropdownChevron.svg"
            className="absolute  w-[15px] lg:w-[0.56vw] top-[50%] chevron dropDownChevronFixer transition-all duration-500 transform translate-y-[-50%]"
          />
        </div>
        <ul
          ref={dropdownItemsRef}
          className="dropdownItems z-[10] max-h-0 transition-all duration-500 absolute top-[120%] overflow-y-scroll border20 w-full"
        >
          {/* <img
            className="w-full h-full top-0 left-0 object-cover absolute bg-[#F9A53E26]"
            src="/images/business/dropdownBg.jpg"
          /> */}

          {options?.map((option, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(option.value)}
              className="group lg:px-[0.83333333333vw] px-[12px] relative cursor-pointer  "
            >
              <img
                className="w-full h-full top-0 leftRightFixer1 object-cover absolute"
                src="/images/business/dropdownBg.jpg"
              />
              <span className="relative z-[2] group-hover:opacity-[0.6] f500 text-[#000000] lg:text22 lg:py-[0.80729166666vw] py-[12.5px] border-b border-[#00000033] block">
                {option.placeholder}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {error && (
        <span className="text18 z-[2] mt-[0.2vw] absolute top-[100%] text-red-600 font-[500]">
          {error}
        </span>
      )}
    </div>
  );
};

export default DropDownField;
