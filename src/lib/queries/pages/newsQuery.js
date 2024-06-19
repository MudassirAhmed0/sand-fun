const { gql } = require("@apollo/client");

export const newsQuery = () => {
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
        ... on Entry_Pages_News {
          title
          slug
          id
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
        }
      }
      recentNews: entries(collection: "news", sort: "date desc", limit: 4) {
        data {
          title
          published
          status
          slug
          ... on Entry_News_News {
            title
            thumbnail: image {
              src(width: 500, height: 300, webp: true)
            }
            mainImage: image {
              src(width: 1600, height: 628, webp: true)
            }
            description
            content
          }
        }
      }
    }
  `;
  return query;
};
