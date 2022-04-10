import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/constants";

const BlogPostContainer = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    list-style-type: none;
  }
`;
const BlogPost = styled.li`
  flex: 1 0 33%;
`;

const Tags = styled.ul`
  display: flex;
  padding: 0px;
  flex-direction: row;
`;

const Tag = styled.li`
  background-color: ${colors.burntOrange};
  padding: 10px;
  border-radius: 50px;
  color: white;
  min-width: 100px;
  text-align: center;
`;

const BlogPicture = styled.div<{
  displayPictureURL: string;
  hoverPictureURL: string;
}>`
  width: 200px;
  height: 200px;
  background: url(${(props) => props.displayPictureURL}) no-repeat;
  background-size: cover;
  :hover {
    background: url(${(props) => props.hoverPictureURL}) no-repeat;
    background-size: cover;
  }
`;

interface PostListProps {
  posts: any;
  totalPages: any;
  currentPage: any;
}

const PostList: FC<PostListProps> = (props) => {
  const { posts } = props;

  return (
    <BlogPostContainer>
      {posts.map((post) => (
        <BlogPost key={post.sys.id}>
          <BlogPicture
            displayPictureURL={post.displayPicture.url}
            hoverPictureURL={post.hoverPicture.url}
          />
          {console.log(post.displayPicture)}
          <article>
            <Tags>
              {post.tags?.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>

            {/* {post.content} */}
            {/* <ReactMarkdown
              children={post.content}
              renderers={ReactMarkdownRenderers(post.excerpt)}
            /> */}
          </article>
        </BlogPost>
      ))}
    </BlogPostContainer>
  );
};
export default PostList;
