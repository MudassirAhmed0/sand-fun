"use client";

import CaptchaField from "./components/CaptchaField";
import DropDownField from "./components/DropDownField";
import FileField from "./components/FileField";
import InputField from "./components/InputField";
import TextAreaField from "./components/TextAreaField";
import useForm from "./useForm";

const Form = ({ arabic, formData, formClass }) => {
  const {
    isLoading,
    states,
    setStates,
    errors,
    handleChange,
    handleSubmit,
    status,
    captchaRef,
    captchaError,
    handleRecaptchaChange
  } = useForm(formData, "career_form", arabic);
  return (
    <form
      data-aos-anchor="#contact-title"
      data-aos="fade"
      className={formClass}
      onSubmit={handleSubmit}
    >
      {formData?.map((input, index) =>
        input.type == "honeypot" ? (
          <input
            key={index}
            className="absolute top-0 pointer-events-none honeypot opacity-[0]"
            value={states[input?.id]}
            id={input.id}
            onChange={handleChange}
          />
        ) : input.type == "select" ? (
          <DropDownField
            key={index}
            placeholder={input.placeholder}
            value={states[input.id]}
            error={errors[input.id]}
            id={input.id}
            widthHalf={input?.widthHalf}
            setStates={setStates}
            options={input.options}
          />
        ) : input.type == "assets" ? (
          <FileField
            key={index}
            value={states[input.id]}
            error={errors[input.id]}
            id={input.id}
            setStates={setStates}
            arabic={arabic}
          />
        ) : input.type == "textarea" ? (
          <TextAreaField
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            value={states[input.id]}
            error={errors[input.id]}
            id={input.id}
            widthHalf={input?.widthHalf}
            handleChange={handleChange}
          />
        ) : (
          <InputField
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            value={states[input.id]}
            error={errors[input.id]}
            id={input.id}
            widthHalf={input?.widthHalf}
            handleChange={handleChange}
          />
        )
      )}

      {status && status == "success" ? (
        <span className="text24 text-green-600">
          The Form Has been Successfully Submitted!
        </span>
      ) : (
        status == "failed" && (
          <span className="text24 text-red-600">
            Something went wrong! please try again
          </span>
        )
      )}
      <CaptchaField
        captchaError={captchaError}
        captchaRef={captchaRef}
        handleRecaptchaChange={handleRecaptchaChange}
        arabic={arabic}
      />
      <button
        className={`${
          isLoading ? "loading " : ""
        }  opacity05 lg:px-[4.22222222222vw] px-[16.15px] lg:py-[0.83vw] py-[9.5px] lg:text18 mtext18 f500 capitalize    bg-[#FF9900] border7 text-white 
          
            `}
      >
        {isLoading
          ? arabic
            ? "جارى التحميل..."
            : "loading..."
          : arabic
          ? "إرسال"
          : "Submit"}
      </button>
    </form>
  );
};

export default Form;
