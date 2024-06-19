import { getClient } from "../client";
import { globalSeoQuery } from "../queries/globalSeoQuery.js";

const getGlobalSeoData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };
  try {
    const { data } = await getClient().query({
      query: globalSeoQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getGlobalSeoData;
