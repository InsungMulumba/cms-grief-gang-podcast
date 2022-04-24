import React, { FC } from "react";
import {
  getPaginatedPostSummaries,
  getTotalPostsNumber,
} from "../../../utils/contentfulApi";
import styled from "styled-components";
import { colors, spacing } from "../../../styles/constants";

import { Config } from "../../../utils/config";
import PostList from "components/PostList";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../../../types/pageWithLayout";
import MainLayout from "../../../layouts/mainLayout";
import Header from "components/Header/Header";
import TitleH1, { SubTitle } from "../../../styles/headings";

const BlogIndexPage: FC<any> = (props) => {
  const { postSummaries, totalPages, currentPage } = props;

  const Root = styled.div`
    display: flex;
    background-color: ${colors.brownCream};
    justify-content: center;
    flex-direction: column;
    min-height: calc(100vh - 120px);
    padding: 60px 0px;
    @media (min-width: 1280px) {
      padding: ${spacing.desktopPageGutter};
    }
  `;
  const Title = styled(SubTitle)`
    color: black;
    text-align: center;
    margin-bottom: 12px;
  `;
  return (
    <>
      <Header showBulletin={false} />
      <Root>
        <Title>Check out my blogposts</Title>

        <PostList
          posts={postSummaries}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </Root>
    </>
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
    return {
      props: {
        postSummaries: postSummaries.items,
        totalPages,
        currentPage: params.page,
      },
    };
  }
};
