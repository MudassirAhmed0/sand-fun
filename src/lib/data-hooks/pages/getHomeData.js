import { getClient } from "@/lib/client.js";
import { homeQuery } from "@/lib/queries/pages/homeQuery";
const getHomeData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: homeQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getHomeData;
