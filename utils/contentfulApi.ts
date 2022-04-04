import { Config } from "./config";
// import { blogQuery } from "./queries";
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const defaultOptions = {
  preview: false,
};

export async function getPageContentBySlug(query, collectionName) {
  const response = await callContentful(query);
  const pageContent = response?.data?.[collectionName]?.items
    ? response.data[collectionName].items
    : [];

  return pageContent;
}

async function callContentful(query, variables?) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${space}`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch data from Contentful!");
  }
}

export async function getTotalPostsNumber() {
  // Build the query
  const query = `
    {
      blogPostCollection {
        total
      }
    }
  `;

  // Call out to the API
  const response = await callContentful(query);
  const totalPosts = response.data.blogPostCollection.total
    ? response.data.blogPostCollection.total
    : 0;

  return totalPosts;
}

export async function getPaginatedPostSummaries(page) {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip =
    skipMultiplier > 0
      ? Config.pageMeta.pagination.pageSize * skipMultiplier
      : 0;

  const query = `{
      blogPostCollection(limit: ${Config.pageMeta.pagination.pageSize}, skip: ${skip}, order: date_DESC) {
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

  // Call out to the API
  const response = await callContentful(query);

  const paginatedPostSummaries = response.data.blogPostCollection
    ? response.data.blogPostCollection
    : { total: 0, items: [] };

  return paginatedPostSummaries;
}

/**
 * Fetch a batch of blog post slugs (by given page number).
 *
 * This method queries the GraphQL API for a single batch of blog post slugs.
 *
 * The query limit of 100 is the maximum number of slugs
 * we can fetch with this query due to GraphQL complexity costs.
 *
 * For more information about GraphQL query complexity, visit:
 * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
 *
 * param: page (number)
 *
 */
export async function getPaginatedSlugs(page) {
  const queryLimit = 50;
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

  const variables = { limit: queryLimit, skip };

  const query = `query GetPaginatedSlugs($limit: Int!, $skip: Int!) {
        blogPostCollection(limit: $limit, skip: $skip, order: date_DESC) {
          total
          items {
            slug
            }
          }
        }`;

  const response = await callContentful(query, variables);

  const { total } = response.data.blogPostCollection;
  const slugs = response.data.blogPostCollection.items
    ? response.data.blogPostCollection.items.map((item) => item.slug)
    : [];

  return { slugs, total };
}

/**
 * Fetch all blog post slugs.
 *
 * This method queries the GraphQL API for blog post slugs
 * in batches that accounts for the query complexity cost,
 * and returns them in one array.
 *
 * This method is used on pages/blog/[slug] inside getStaticPaths() to
 * generate all dynamic blog post routes.
 *
 * For more information about GraphQL query complexity, visit:
 * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
 *
 */
export async function getAllPostSlugs() {
  let page = 1;
  let shouldQueryMoreSlugs = true;
  const returnSlugs = [];

  while (shouldQueryMoreSlugs) {
    const response = await getPaginatedSlugs(page);

    if (response.slugs.length > 0) {
      returnSlugs.push(...response.slugs);
    }

    shouldQueryMoreSlugs = returnSlugs.length < response.total;
    page++;
  }

  return returnSlugs;
}

/**
 * Fetch a single blog post by slug.
 *
 * This method is used on pages/blog/[slug] to fetch the data for
 * individual blog posts at build time, which are prerendered as
 * static HTML.
 *
 * The content type uses the powerful Rich Text field type for the
 * body of the post.
 *
 * This query fetches linked assets (i.e. images) and entries
 * (i.e. video embed and code block entries) that are embedded
 * in the Rich Text field. This is rendered to the page using
 * @components/RichTextPageContent.
 *
 * For more information on Rich Text fields in Contentful, view the
 * documentation here: https://www.contentful.com/developers/docs/concepts/rich-text/
 *
 * Linked assets and entries are parsed and rendered using the npm package
 * @contentful/rich-text-react-renderer
 *
 * https://www.npmjs.com/package/@contentful/rich-text-react-renderer
 *
 * param: slug (string)
 *
 */
export async function getPostBySlug(slug, options = defaultOptions) {
  const variables = { slug, preview: options.preview };

  const query = `query GetPostBySlug($slug: String!, $preview: Boolean!){
    blogPostCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
      total
      items {
        sys {
          id
        }
        date
        title
        slug
        content
        blogContent {
       
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on BlogPost {
                    title
                    slug
                  }
                }
                block {
                  sys {
                    id
                  }

                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
        
        tags
      }
    }
  }`;

  const response = await callContentful(query, variables);

  const post = response.data?.blogPostCollection?.items
    ? response.data?.blogPostCollection.items
    : [];

  return post.pop();
}
