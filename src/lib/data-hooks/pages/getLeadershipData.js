import { getClient } from "@/lib/client.js";
import { leadershipQuery } from "@/lib/queries/pages/leadershipQuery";
const getLeadershipData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: leadershipQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getLeadershipData;
