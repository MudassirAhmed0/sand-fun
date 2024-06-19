const getFormttedGroupCategory = (data, productsData) => {
  const newData = [];
  data?.forEach((i) => {
    const newCategories = [];
    productsData?.forEach((item) => {
      if (
        item?.flat_products_cateogry[0].groupCat?.groupCatID == i?.groupCatID
      ) {
        newCategories.push(item?.flat_products_cateogry[0]?.slug);
      }
    });
    newData[i.groupCatOrder] = {
      title: i.groupCatID?.split("::")[1],
      length: newCategories.length,
      categories: [...new Set(newCategories)],
      image: i?.groupCatImage?.url
    };
  });
  return newData;
};

export default getFormttedGroupCategory;
