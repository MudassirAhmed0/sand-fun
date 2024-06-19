import { getClient } from "../client";
import { pagesQuery } from "../queries/pagesQuery.js";

const getPagesData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };
  try {
    const { data } = await getClient().query({
      query: pagesQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getPagesData;
