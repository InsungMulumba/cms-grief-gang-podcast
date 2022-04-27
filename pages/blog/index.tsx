import React, { FC } from "react";
import {
  getPaginatedPostSummaries,
  getPageContentBySlug,
  getAllPostSlugs,
} from "../../utils/contentfulApi";
import { Config } from "../../utils/config";
import PostList from "components/PostList";
import { GetStaticProps } from "next";
import styled from "styled-components";
import PageWithLayoutType from "../../types/pageWithLayout";
import MainLayout from "../../layouts/mainLayout";
import Header from "../../components/Header/Header";
import { colors, spacing } from "../../styles/constants";
import TitleH1, { SubTitle } from "../../styles/headings";
import { faqBlogQuery } from "../../utils/queries";
import Accordion from "../../components/Accordion/Accordion";

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

const BlogIndex: FC<any> = (props) => {
  const { postSummaries, currentPage, totalPages, pageContent, faqs } = props;

  // const pageTitle = pageContent ? pageContent.title : "Blog";
  // const pageDescription = pageContent
  //   ? pageContent.description
  //   : "Articles | Next.js Contentful blog starter";

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
        <Accordion items={faqs} />
      </Root>
    </>
  );
};

(BlogIndex as PageWithLayoutType).layout = MainLayout;

export default BlogIndex;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const postSummaries = await getPaginatedPostSummaries(1);
  const faqs = await getPageContentBySlug(faqBlogQuery, "faqCollection");
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
        faqs,
      },
    };
  } else console.log("Error: no posts");
};
