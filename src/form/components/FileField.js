import React, { useState } from "react";

const FileField = ({ error, setStates, id, value, arabic }) => {
  const handleFile = (e) => {
    handleFileChange(e.target);
  };
  const handleFileChange = (event) => {
    const newFile = event.files[0];
    setStates((prev) => {
      return { ...prev, [id]: newFile };
    });
    // if (event.files[0]?.size > 850000) {
    //   fileError.current.classList.remove("hidden");
    //   setStates({
    //     ...states,
    //     file: ""
    //   });
    //   setTimeout(() => {
    //     fileError.current.classList.add("hidden");
    //   }, 15000);
    // } else {
    //   fileError.current.classList.add("hidden");
    //   setStates({
    //     ...states,
    //     file: event.files[0]
    //   });
    // }
  };
  return (
    <div className="w-full relative">
      <label htmlFor={id} className="w-full cursor-pointer">
        <div className="lg:py-[2.44791666667vw] sm:py-[30px] py-[20px] flex flex-col relative lg:gap-y-[0.41666666666vw] items-center justify-center lg:text24 m18 f700 w-full border-[2px] border-dashed border-[#5E5A4F] border20">
          {value?.name ? (
            <>
              <span className="blackOp07 ">
                {arabic ? "تم تحميل الملف" : "File Uploaded"}
              </span>
              <span className="text-[#F9A53E]">{value?.name}</span>
            </>
          ) : arabic ? (
            <>
              <span className="blackOp07 ">اسحب أو اسقط هنا </span>
              <span className="blackOp07 f500">أو</span>
              <span className="text-[#F9A53E]"> تصفح الملفات</span>
            </>
          ) : (
            <>
              <span className="blackOp07 ">Darg or drop here</span>
              <span className="blackOp07 f500">or</span>
              <span className="text-[#F9A53E]">Browse files</span>
            </>
          )}
          <input
            onChange={handleFile}
            type="file"
            name={id}
            id={id}
            className="w-full h-full absolute opacity-0 cursor-pointer"
            accept=".pdf, .doc, .docx, .txt, .rtf"
          />
        </div>
        <span className="block lg:text22 m18 lg:mt16 mtm12 f500 text-[#1B1C16] text-opacity-[0.5]">
          {arabic
            ? "الملفات المرفقة: pdf ، doc ، docx ، txt ، rtf"
            : " Attach file types: pdf, doc, docx, txt, rtf"}
        </span>
        {error && (
          <span className="text18 z-[2]  relative mt-[0.2vw] text-red-600 font-[500]">
            {error}
          </span>
        )}
      </label>
    </div>
  );
};

export default FileField;
