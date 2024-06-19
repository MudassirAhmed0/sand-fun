import getPagesData from "./getPagesData";
import getAboutData from "./pages/getAboutData";
import getContactData from "./pages/getContactData";
import getHomeData from "./pages/getHomeData";
import getLeadershipData from "./pages/getLeadershipData";
import getNewsData from "./pages/getNewsData";
import getProductPageData from "./pages/getProductPageData";
import getSustainabilityData from "./pages/getSustainabilityData";

const getData = async (slug, isAr) => {
  const pagesData = await getPagesData(isAr);
  // console.log(pagesData.pages.data);
  const pages = pagesData?.pages?.data;
  const handleData = async (blueprint) => {
    switch (blueprint) {
      case "home":
        return await getHomeData(slug, isAr);
      case "about":
        return await getAboutData(slug, isAr);
      case "leadership":
        return await getLeadershipData(slug, isAr);
      case "career":
      // return await getCareerData(slug, isAr);
      case "products":
        return await getProductPageData(slug, isAr);
      case "sustainability":
        return await getSustainabilityData(slug, isAr);
      case "contactus":
        return await getContactData(slug, isAr);
      case "news":
        return await getNewsData(slug, isAr);
      case "page":
      // return await getPrivacy(slug, isAr);
    }
  };

  for (const page of pages) {
    if (page.slug === slug) {
      const data = await handleData(page.blueprint);
      return data;
    }
  }
  return slug;
};

export default getData;
