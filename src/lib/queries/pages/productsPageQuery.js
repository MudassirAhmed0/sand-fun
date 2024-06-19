const { gql } = require("@apollo/client");

export const productsPageQuery = () => {
  const query = gql`
    query Page($site: String!, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        id
        title
        slug
        url
        uri
        edit_url
        permalink
        published
        private
        status
        blueprint
        date
        last_modified
        locale
        ... on Entry_Pages_Products {
          seo_group {
            seo_image {
              src(width: 1200, height: 628)
            }
            seo_title
            seo_description
            seo_keywords
          }
          products_categories {
            image {
              ... on Asset_Assets {
                url: src
              }
            }
            description
            title
            chosen_category {
              title
            }
          }
        }
      }
    }
  `;
  return query;
};
