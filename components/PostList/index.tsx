import Link from "next/link";
import React, { FC } from "react";

// import ReactMarkdown from "react-markdown";
// import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";

interface PostListProps {
  posts: any;
}

const PostList: FC<PostListProps> = (props) => {
  const { posts } = props;

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.sys.id}>
          <article>
            <time dateTime={post.date}>{post.date}</time>

            <Link href={`blog/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>

            <ul>
              {post.tags?.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {/* {post.content} */}
            {/* <ReactMarkdown
              children={post.content}
              renderers={ReactMarkdownRenderers(post.excerpt)}
            /> */}
          </article>
        </li>
      ))}
    </ol>
  );
};
export default PostList;
