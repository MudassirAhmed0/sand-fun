const { gql } = require("@apollo/client");

export const contactQuery = () => {
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
        ... on Entry_Pages_Contactus {
          title
          hero_section {
            title
            description
            image {
              src(width: 1072, height: 623, webp: true)
            }
          }
          contactUsSection: form_section {
            title_heading
            description
            linked_form {
              handle
              title
              honeypot
              fields {
                display
                type
                handle
                width
                config
              }
            }
          }
          map_section {
            title_heading
            info_window_data {
              image {
                src(width: 133, height: 126)
              }
              link
              link_text
              title_heading
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
