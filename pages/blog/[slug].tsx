import React, { FC } from "react";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../../types/pageWithLayout";
import MainLayout from "../../layouts/mainLayout";
import { getAllPostSlugs, getPostBySlug } from "../../utils/contentfulApi";

const PostWrapper: FC<any> = (props) => {
  const { post, preview } = props;

  return (
    <>
      {post.title}
      {post.content}
    </>
    // <MainLayout preview={preview}>
    //   <PageMeta
    //     title={post.title}
    //     description={post.excerpt}
    //     url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
    //     canonical={post.externalUrl ? post.externalUrl : false}
    //   />

    //   <Post post={post} />
    // </MainLayout>
  );
};

(PostWrapper as PageWithLayoutType).layout = MainLayout;

export default PostWrapper;

export async function getStaticPaths() {
  const blogPostSlugs = await getAllPostSlugs();

  const paths = blogPostSlugs.map((slug) => {
    return { params: { slug } };
  });

  // Using fallback: "blocking" here enables preview mode for unpublished blog slugs
  // on production
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getPostBySlug(params.slug, {
    preview: preview,
  });

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (!post) {
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
