import { getClient } from "@/lib/client.js";
import { aboutQuery } from "@/lib/queries/pages/aboutQuery";
const getAboutData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: aboutQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getAboutData;
