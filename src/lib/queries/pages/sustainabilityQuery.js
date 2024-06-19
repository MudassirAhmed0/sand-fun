const { gql } = require("@apollo/client");

export const sustainabilityQuery = () => {
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
        ... on Entry_Pages_Sustainability {
          title
          hero_section {
            title
            description
            image {
              src(width: 1072, height: 623, webp: true)
            }
          }
          main_sustainability_items {
            title
            description
            image {
              src(width: 450, height: 530, webp: true)
            }
          }
          seo_group {
            seo_image {
              src(width: 1200, height: 628)
            }
            seo_title
            seo_description
            seo_keywords
          }
        }
      }
    }
  `;
  return query;
};
