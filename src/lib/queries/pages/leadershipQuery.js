const { gql } = require("@apollo/client");

export const leadershipQuery = () => {
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
        ... on Entry_Pages_Leadership {
          title
          hero_section {
            title
            description
            image {
              src(width: 1072, height: 623, webp: true)
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
      boardOfDirectors: entries(collection: "board_of_director") {
        data {
          title
          ... on Entry_BoardOfDirector_BoardOfDirector {
            title

            content
            image {
              src(width: 1200, height: 628, webp: true)
            }
          }
        }
      }
      managementTeam: entries(collection: "management_team") {
        data {
          title
          ... on Entry_ManagementTeam_ManagementTeam {
            title

            content
            image {
              src(width: 1200, height: 628, webp: true)
            }
          }
        }
      }
    }
  `;
  return query;
};
