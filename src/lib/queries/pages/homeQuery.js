const { gql } = require("@apollo/client");

export const homeQuery = () => {
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
        ... on Entry_Pages_Home {
          title
          hero {
            hero_slides {
              title
              description
              image {
                src(width: 1440, height: 851, webp: true)
              }
            }
          }
          about_section {
            title_heading
            description
            link_text
            link
            external_link
            images {
              src(width: 1638, height: 1092, webp: true)
            }
          }
          our_products_section {
            title_heading
            description
            link_text
            link
            external_link
            products {
              product_image {
                src(width: 348, height: 395, webp: true)
              }
              title
              description
              link_text
              link
              external_link
            }
          }
          sustainability_section {
            title_heading
            description
            link_text
            link
            external_link
            background_image {
              src(width: 1440, height: 732, webp: true)
            }
          }
          news_section {
            title_heading
            link_text
            link
            external_link
          }
          contactUsSection: section {
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
      recentNews: entries(
        collection: "news"
        site: $site
        sort: "date desc"
        limit: 8
      ) {
        data {
          title
          published
          status
          slug
          date
          ... on Entry_News_News {
            title
            thumbnail: image {
              src(width: 345, height: 301, webp: true)
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
