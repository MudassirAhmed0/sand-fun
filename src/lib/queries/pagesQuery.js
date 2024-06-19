const { gql } = require("@apollo/client");

export const pagesQuery = () => {
  const query = gql`
    query AllPages($site: String!) {
      pages: entries(collection: "pages", site: $site) {
        data {
          title
          slug
          id
          locale
          last_modified
          blueprint
        }
      }
    }
  `;
  return query;
};
