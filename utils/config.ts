const SITE_URL = "https://www.thegriefgang.com/";
export const Config = {
  pageMeta: {
    pagination: {
      pageSize: 3,
      recentPostsSize: 3,
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
  },
};
