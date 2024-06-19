import { getClient } from "@/lib/client";
import { footerQuery } from "@/lib/queries/layout/footerQuery";

const getFooterData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };
  try {
    const { data } = await getClient().query({
      query: footerQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getFooterData;
