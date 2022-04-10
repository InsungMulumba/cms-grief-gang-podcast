import React, { FC } from "react";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../../types/pageWithLayout";
import MainLayout from "../../layouts/mainLayout";
import { getAllPostSlugs, getPostBySlug } from "../../utils/contentfulApi";
import { renderPost } from "../../utils/RichTextRender";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { colors, spacing } from "../../styles/constants";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Root = styled.div`
  width: 100vw;
  background-color: ${colors.cream};
  min-height: calc(100vh - 120px);
  padding: ${spacing.mobilePageGutter};
  @media (min-width: 1280px) {
    padding: ${spacing.desktopPageGutter};
  }
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const PageContent = styled.div`
  @media (min-width: 1280px) {
    width: 80%;
    margin: 0px auto;
  }

  p {
    margin: 0px;
    line-height: 24px;
  }
  font-family: "Spartan", sans-serif;
`;
const PostWrapper: FC<any> = (props) => {
  const { post, preview } = props;

  return (
    <>
      <Header showBulletin={false} />
      <Root>
        <PageContent>{renderPost(post.blogContent)} </PageContent>
      </Root>
    </>
  );

  /* {post.title}
      {post.content}
      {console.log(post.content)} */

  // <MainLayout preview={preview}>
  //   <PageMeta
  //     title={post.title}
  //     description={post.excerpt}
  //     url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
  //     canonical={post.externalUrl ? post.externalUrl : false}
  //   />

  //   <Post post={post} />
  // </MainLayout>
};

(PostWrapper as PageWithLayoutType).layout = MainLayout;

export default PostWrapper;

export async function getStaticPaths() {
  const blogPostSlugs = await getAllPostSlugs();

  const paths = blogPostSlugs.map((slug) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getPostBySlug(params.slug, {
    preview: preview,
  });

  if (!post) {
    console.log("not a blog post");
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      post,
    },
  };
}
