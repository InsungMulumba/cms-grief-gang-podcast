import React, { FC } from "react";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../../types/pageWithLayout";
import MainLayout from "../../layouts/mainLayout";
import { getAllPostSlugs, getPostBySlug } from "../../utils/contentfulApi";
import { renderPost } from "../../utils/RichTextRender";
import ReactDom from "react-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostWrapper: FC<any> = (props) => {
  const { post, preview } = props;

  return <>{renderPost(post.blogContent)}</>;

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
