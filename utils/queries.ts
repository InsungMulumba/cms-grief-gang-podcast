export const episodeQuery = `
{
    episodeCollection(limit: 20) {
      items {
        date
        showTitle
        showLink
      }
    }
  }`;

export const homeQuery = `{
    homepageCollection(limit: 20) {
      items {
        aboutSlice
        welcomeSlice
        mediaLink
      }
    }
  }`;

export const newHomeQuery = `{
    homeCollection(limit: 20) {
      items {
        mainImage {
          title
          url
        }
        mainContent {
          json
        }
        textTitle
        textContent
        backgroundColor
        orderNumber
      }
    }
  }`;

export const mediaQuery = `
    mediaCollection(limit: 20) {
      items {
        mediaLink
        mediaQuery
      }
    }
  `;

export const blogQuery = `{
    blogPostCollection(limit: 2, skip: 0, order: date_DESC) {
      total
      items {
        sys {
          id
        }
        date
        title
        slug
        content
        tags
      }
    }
  }`;
