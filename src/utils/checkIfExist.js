export const checkIfExist = (content, alternate) => {
  if (content) {
    return content;
  } else {
    return alternate ? alternate : "";
  }
};
