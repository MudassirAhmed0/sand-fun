import React, { useEffect, useRef, useState } from "react";
import postForm from "./postForm";
function scrollToElementById(id, offset) {
  const element = document.getElementById(id);
  setTimeout(() => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (offset) {
        // Calculate the final scroll position
        const scrollTop =
          element.getBoundingClientRect().top + window.pageYOffset - offset;
        // Scroll to the adjusted position
        window.scrollTo({ top: scrollTop, behavior: "smooth" });
      }
    }
  }, 100);
}

const validateEmail = (email) => {
  // Regular expression for validating an email address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
};

const useForm = (inputFieldsData, endpoint, arabic) => {
  const [states, setStates] = useState({});
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const captchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const handleRecaptchaChange = (token) => {
    // This callback will be called when the user verifies the CAPTCHA
    setIsVerified(true);
  };
  const resetForm = () => {
    const newStates = {};
    inputFieldsData?.forEach((item) => {
      newStates[item.id] = "";
    });
    setStates(newStates);
    setErrors(newStates);
    setCaptchaError(false);
    setIsVerified(false);
    captchaRef.current.reset();

    document.querySelectorAll("input[type=radio]").forEach((item) => {
      item.checked = false;
    });

    setTimeout(() => {
      setStatus("");
    }, 8000);
  };
  useEffect(() => {
    resetForm();
  }, []);

  const handleChange = (e) => {
    if (e.target.type == "radio") {
      setStates((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    } else {
      setStates((prev) => {
        return { ...prev, [e.target.id]: e.target.value };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    let isError = false;
    const headerHeight = document.querySelector("header").offsetHeight;

    Object.keys(states).forEach((key, index) => {
      if (!states[key] && inputFieldsData[index]?.required) {
        newErrors[key] = arabic ? "هذا الحقل مطلوب" : "This Field is Required";
        if (!isError) {
          isError = true;
          // errorElement
          scrollToElementById(inputFieldsData[index]?.id, headerHeight);
        }
      } else if (key.toLowerCase().includes("email")) {
        if (!validateEmail(states[key])) {
          newErrors[key] = arabic
            ? "البريد الإلكتروني غير صحيح"
            : "The Email isn't Correct";
          isError = true;
        }
      }
    });

    setErrors(newErrors);

    if (!isError) {
      if (isVerified) {
        setIsLoading(true);
        const res = await postForm(states, endpoint);
        if (res?.status == 200) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
        setIsLoading(false);

        resetForm();
      } else {
        setCaptchaError(true);
      }
    }
  };

  return {
    states,
    setStates,
    status,
    setStatus,
    errors,
    setErrors,
    isLoading,
    setIsLoading,
    handleChange,
    handleSubmit,
    captchaRef,
    captchaError,
    handleRecaptchaChange
  };
};

export default useForm;
