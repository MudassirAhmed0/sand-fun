import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaField = ({
  captchaError,
  handleRecaptchaChange,
  captchaRef,
  arabic
}) => {
  return (
    <div className="md:mt-[1vw] md:mb-0 my-[15px] relative w-full">
      <ReCAPTCHA
        hl={arabic ? "ar" : "en"}
        ref={captchaRef}
        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
        onChange={handleRecaptchaChange}
      />
      {captchaError && (
        <span className="text20 text-red-600 errorElement  absolute bottom-[-30px] md:bottom-[-2.2vw]">
          This Field is Required
        </span>
      )}
    </div>
  );
};

export default CaptchaField;
