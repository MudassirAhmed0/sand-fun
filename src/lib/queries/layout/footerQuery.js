const { gql } = require("@apollo/client");

export const footerQuery = () => {
  const query = gql`
    query bottomnav($site: String!) {
      footerMainNav: nav(handle: "bottom_navigation") {
        handle
        title
        max_depth
        expects_root
        tree(site: $site) {
          page {
            entry_id
            title
            url
          }
        }
      }
      FooterData: globalSet(handle: "footer_data", site: $site) {
        ... on GlobalSet_FooterData {
          white_logo {
            path: url
          }
          contact_us_data {
            address
            addressLink: adress_link
            phone
            email
          }
          products_links {
            flat_products {
              label: title
              groupCat: slug
              id
              uri
            }
            long_products {
              label: title
              cat: slug
              id
              uri
            }
          }
          copyright_links {
            link
          }
          copyright_text
        }
      }
    }
  `;
  return query;
};
