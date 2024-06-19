const { gql } = require("@apollo/client");

export const productsQuery = () => {
  const query = gql`
    query Products {
      flatFirstCat: terms(taxonomy: "first_level_flat_category") {
        total
        data {
          title
          category_id: id
          slug
          ... on Term_FirstLevelFlatCategory_FirstLevelFlatCategory {
            groupCatID: id
            groupCatTitle: title
            groupCatOrder: order
            groupCatImage: image {
              ... on Asset_Assets {
                url: src(width: 445, height: 258, webp: true)
              }
            }
          }
        }
      }
      flatProducts: entries(collection: "flat_products") {
        total
        data {
          product_id: id
          slug
          ... on Entry_FlatProducts_FlatProduct {
            product_name: title
            description
            width_range {
              typical_values
              unit {
                value
                label
              }
            }
            thicknesses_test_methods {
              thickness {
                typical_values
                unit {
                  value
                  label
                }
              }
              test_methods {
                method
              }
            }
            flat_products_cateogry {
              category_id: id
              slug
              title
              ... on Term_FlatProductsCateogry_FlatProductsCateogry {
                groupCat: group_category {
                  groupCatID: id
                  groupCatTitle: title
                }
              }
              ... on Term_FlatProductsCateogry_FlatProductsCateogry {
                image {
                  ... on Asset_Assets {
                    url: src(width: 445, height: 258, webp: true)
                  }
                }
              }
            }
          }
        }
      }
      flatProductsCat: terms(taxonomy: "flat_products_cateogry") {
        total
        data {
          title
          category_id: id
          slug
        }
      }
      longProducts: entries(collection: "long_products") {
        total
        data {
          slug
          ... on Entry_LongProducts_LongProduct {
            product_id: id
            product_name: title
            size_range {
              as: typical_values
            }
            long_products_category {
              category_id: id
              slug
              title
              ... on Term_LongProductsCategory_LongProductsCategory {
                image {
                  ... on Asset_Assets {
                    url: src(width: 445, height: 258, webp: true)
                  }
                }
              }
            }
          }
        }
      }
      longProductsCat: terms(taxonomy: "long_products_category") {
        total
        data {
          title
          category_id: id
          slug
        }
      }
    }
  `;
  return query;
};
