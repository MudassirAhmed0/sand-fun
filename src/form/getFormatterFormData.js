const splitArabicAndEnglishText = (text, arabic) => {
  return text.split("/")[arabic ? 1 : 0];
};
const splitDropdownArabicAndEnglishText = (text, arabic) => {
  return text.split("/")[arabic ? 2 : 1];
};
const orderOptions = (text) => {
  return +text.split("/")[0];
};

const getFormattedFormData = (formData, arabic) => {
  const honeypot = formData?.honeypot;
  const inputFields = formData?.fields;
  const inputFieldsData = [];
  inputFields?.forEach((field) => {
    let options = [];
    if (field.config.options) {
      const fieldOptions = field.config.options;
      Object.keys(fieldOptions)?.forEach((optionKey) => {
        options[orderOptions(fieldOptions[optionKey])] = {
          placeholder: splitDropdownArabicAndEnglishText(
            fieldOptions[optionKey],
            arabic
          ),
          value: splitDropdownArabicAndEnglishText(
            fieldOptions[optionKey],
            arabic
          )
        };
      });
    }
    inputFieldsData?.push({
      type:
        field?.handle == honeypot
          ? "honeypot"
          : field?.config?.input_type == "tel" ||
            field?.config?.input_type == "number"
          ? "number"
          : field?.type == "email"
          ? "text"
          : field?.type,
      placeholder: splitArabicAndEnglishText(field?.display, arabic),
      id: field?.handle,
      required: field?.handle != honeypot,
      widthHalf: field?.width == 50,
      options
    });
  });
  return inputFieldsData;
};

export default getFormattedFormData;
