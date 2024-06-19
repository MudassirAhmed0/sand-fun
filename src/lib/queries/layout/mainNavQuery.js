const { gql } = require("@apollo/client");

export const mainNavQuery = () => {
  const query = gql`
    query TopNav($site: String!) {
      nav(handle: "top_navigation") {
        handle
        title
        max_depth
        expects_root
        tree(site: $site) {
          depth
          children {
            depth
            page {
              id
              title
              url
              permalink
              entry_id
              ... on NavEntryPage_TopNavigation_Pages_About {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Career {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Home {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Leadership {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_News {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Products {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Sustainability {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Contactus {
                slug
              }
            }
          }
          page {
            id
            title
            url
            permalink
            entry_id
            ... on NavEntryPage_TopNavigation_Pages_About {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Career {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Home {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Leadership {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_News {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Products {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Sustainability {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Contactus {
              slug
            }
          }
        }
      }
    }
  `;
  return query;
};
