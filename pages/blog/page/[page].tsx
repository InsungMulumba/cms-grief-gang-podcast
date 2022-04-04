import React, { FC } from "react";
import {
  getPaginatedPostSummaries,
  getTotalPostsNumber,
} from "../../../utils/contentfulApi";
import { Config } from "../../../utils/config";
import PostList from "components/PostList";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../../../types/pageWithLayout";
import MainLayout from "../../../layouts/mainLayout";

const BlogIndexPage: FC<any> = (props) => {
  const { postSummaries, totalPages, currentPage } = props;

  return (
    <PostList
      posts={postSummaries}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

(BlogIndexPage as PageWithLayoutType).layout = MainLayout;

export default BlogIndexPage;

export async function getStaticPaths() {
  const totalPosts = await getTotalPostsNumber();
  const totalPages = Math.ceil(
    totalPosts / Config.pageMeta.pagination.pageSize
  );

  const paths = [];

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

// export async function getStaticProps({ params }) {
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postSummaries = await getPaginatedPostSummaries(params.page);

  if (postSummaries) {
    const totalPages = Math.ceil(
      postSummaries.total / Config.pageMeta.pagination.pageSize
    );
    console.log(postSummaries);
    return {
      props: {
        postSummaries: postSummaries.items,
        totalPages,
        currentPage: params.page,
      },
    };
  }
};
