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

export const mediaQuery = `
    mediaCollection(limit: 20) {
      items {
        mediaLink
        mediaQuery
      }
    }
  `;
