export const getFormattedProductData = ({
  flatProducts,
  longProducts,
  products
}) => {
  const groupedFlatProducts = flatProducts?.reduce((acc, product) => {
    const categoryId = product.flat_products_cateogry[0].category_id;
    if (!acc[categoryId?.split("::")[1]]) {
      acc[categoryId?.split("::")[1]] = [];
    }

    acc[categoryId?.split("::")[1]].push(product);
    return acc;
  }, {});
  const groupedLongProductsProducts = longProducts?.reduce((acc, product) => {
    const categoryId = product.long_products_category[0].category_id;
    if (!acc[categoryId?.split("::")[1]]) {
      acc[categoryId?.split("::")[1]] = [];
    }
    acc[categoryId?.split("::")[1]].push(product);
    return acc;
  }, {});

  const productData = [];
  products.forEach((product, index) => {
    productData.push({
      slug: index == 0 ? "flat-products" : "long-products",
      desc: product?.description,
      title: product?.title,
      img: product?.image?.url,
      items: index == 0 ? groupedFlatProducts : groupedLongProductsProducts
    });
  });

  return productData;
};
