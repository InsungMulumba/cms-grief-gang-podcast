import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/constants";
import Pagination from "./Pagination";

const BlogPostContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  li {
    list-style-type: none;
  }
`;
const BlogPost = styled.li`
  flex: 1 0 33%;

  @media (max-width: 1280px) {
    flex: 1 0 50%;
    max-width: 50%;
  }

  @media (max-width: 767px) {
    margin-bottom: 90px;
    max-width: 100%;
  }
`;

const Tags = styled.ul`
  display: flex;
  padding: 0px;
  flex-direction: row;
  justify-content: space-around;
  padding: 18px 30px 18px;
  width: 90%;
  margin: 0px auto;

  @media (min-width: 767px) {
    width: 75%;
  }
`;

const Tag = styled.li`
  background-color: ${colors.burntOrange};
  padding: 10px;
  border-radius: 50px;
  color: white;
  min-width: 100px;
  text-align: center;
`;

const PostTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Spartan", sans-serif;
  font-size: 20px;
  width: 90%;
  margin: 0px auto;
  font-weight: 700;
  color: ${colors.burntOrange};
  @media (min-width: 767px) {
    width: 300px;
    text-align: center;
  }
`;

const BlogPicture = styled.div<{
  displayPictureURL: string;
  hoverPictureURL: string;
}>`
  width: 300px;
  height: 300px;

  @media (max-width: 1280px) {
    width: 150px;
    height: 150px;
  }
  margin: 0px auto;
  transition: 0.5s ease;

  background: url(${(props) => props.displayPictureURL}) no-repeat;
  background-size: cover;

  :hover {
    background: url(${(props) => props.hoverPictureURL}) no-repeat;
    background-size: cover;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100vw;
    :hover {
      background-size: contain;
    }
  }
`;

interface PostListProps {
  posts: any;
  totalPages: any;
  currentPage: any;
}

const PostList: FC<PostListProps> = (props) => {
  const { posts, currentPage, totalPages } = props;

  // Calculate the disabled states of the next and previous links
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
    <BlogPostContainer>
      {posts.map((post) => (
        <BlogPost key={post.sys.id}>
          <Link href={`/blog/${post.slug}`}>
            <a>
              <BlogPicture
                displayPictureURL={post.displayPicture.url}
                hoverPictureURL={post.hoverPicture.url}
              />{" "}
            </a>
          </Link>
          <article>
            <Tags>
              {post.tags?.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <PostTitle>{post.title}</PostTitle>
              </a>
            </Link>
          </article>
        </BlogPost>
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </BlogPostContainer>
  );
};
export default PostList;
