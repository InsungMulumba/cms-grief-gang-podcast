const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const defaultOptions = {
  preview: false,
};

// export default class ContentfulApi {
 const getPageContentBySlug = async (
  query,
  collectionName,
  options = defaultOptions
) => {
  const response = await callContentful(query, options);

  const pageContent = response?.data?.[collectionName]?.items
    ? response.data[collectionName].items
    : [];

  return pageContent.pop();
};

const callContentful = async (query) => {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${space}`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch data from Contentful!");
  }
};

export default getPageContentBySlug;
// }
// module.exports.getPageContentBySlug = getPageContentBySlug();
