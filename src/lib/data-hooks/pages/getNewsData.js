import { getClient } from "@/lib/client.js";
import { newsQuery } from "@/lib/queries/pages/newsQuery";
const getNewsData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: newsQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getNewsData;
