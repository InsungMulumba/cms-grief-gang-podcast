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

export const acastQuery = `
    acastLinkCollection(limit: 1) {
      items {
        url
      }
    }
  `;

export const faqQuery = `{
  faqCollection(limit: 20) {
    items {
      question
      answer
      orderNumber
    }
  }
}`;

export const asFeaturedInQuery = `{
  asFeaturedInCollection(limit: 10) {
    items {
      mediaUrl
      mediaLogo
    }
}`;
