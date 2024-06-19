import { getClient } from "@/lib/client.js";
import { productsPageQuery } from "@/lib/queries/pages/productsPageQuery";

const getProductPageData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: productsPageQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getProductPageData;
