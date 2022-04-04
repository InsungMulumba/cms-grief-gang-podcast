import React, { FC } from "react";
import {
  getPaginatedPostSummaries,
  getPageContentBySlug,
} from "../../utils/contentfulApi";
import { Config } from "../../utils/config";
import PostList from "components/PostList";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../../types/pageWithLayout";
import MainLayout from "../../layouts/mainLayout";

const BlogIndex: FC<any> = (props) => {
  const { postSummaries, currentPage, totalPages, pageContent } = props;

  const pageTitle = pageContent ? pageContent.title : "Blog";
  const pageDescription = pageContent
    ? pageContent.description
    : "Articles | Next.js Contentful blog starter";

  return (
    <PostList
      posts={postSummaries}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

(BlogIndex as PageWithLayoutType).layout = MainLayout;

export default BlogIndex;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const postSummaries = await getPaginatedPostSummaries(1);
  const pageContent = await getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    }
  );

  if (postSummaries) {
    const totalPages = Math.ceil(
      postSummaries.total / Config.pageMeta.pagination.pageSize
    );

    return {
      props: {
        postSummaries: postSummaries.items,
        totalPages,
        currentPage: "1",
        pageContent: pageContent || null,
        preview,
      },
    };
  } else console.log("hit");
};
