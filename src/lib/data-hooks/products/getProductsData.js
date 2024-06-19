import { getClient } from "@/lib/client";
import { productsQuery } from "@/lib/queries/products/productsQuery";

const getProductsData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };
  try {
    const { data } = await getClient().query({
      query: productsQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getProductsData;
