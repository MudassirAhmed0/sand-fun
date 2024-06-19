const { gql } = require("@apollo/client");

export const aboutQuery = () => {
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
        ... on Entry_Pages_About {
          hero_section {
            title
            description
            image {
              src(width: 1072, height: 623, webp: true)
            }
          }
          about_vision_mission {
            title
            description
            image {
              src(width: 450, height: 530, webp: true)
            }
            visiontitle
            vision
            mission_title
            mission
          }
          story_section {
            title_heading
            description
            years_slider {
              year: title
              description
              image {
                src(width: 380, height: 222, webp: true)
              }
            }
          }
          our_plant_section {
            title
            description
            image {
              src(width: 450, height: 530, webp: true)
            }
          }
          seo_group {
            seo_image {
              id
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
