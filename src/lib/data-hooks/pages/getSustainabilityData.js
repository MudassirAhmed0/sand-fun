import { getClient } from "@/lib/client.js";
import { sustainabilityQuery } from "@/lib/queries/pages/sustainabilityQuery";

const getSustainabilityData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: sustainabilityQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getSustainabilityData;
