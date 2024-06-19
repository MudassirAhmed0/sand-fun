import { getClient } from "@/lib/client.js";
import { contactQuery } from "@/lib/queries/pages/contactQuery";
const getContactData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: contactQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getContactData;
