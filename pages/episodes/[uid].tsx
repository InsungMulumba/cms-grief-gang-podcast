import { GetStaticProps } from "next";
import React, { FC } from "react";
import { fetchEntries } from "../../utils/contentfulPosts";
import { useRouter } from 'next/router'
import MainLayout from "../../layouts/mainLayout";
import PageWithLayoutType from "../../types/pageWithLayout";


const Post: FC = () => {

    const router = useRouter()
    const { id } = router.query

    return (
      <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', width: "100%", height: "calc(60vh)" }}>
        <h1>The dynamic route is {id}</h1>
      </div>
    );
  };
  
  (Post as PageWithLayoutType).layout = MainLayout;
  
  export default Post;

  export const getStaticProps: GetStaticProps = async () => {
    const res = await fetchEntries();
  
    const rawPosts = await res.map((p) => {
      if (p.sys.contentType.sys.id === "episode") {
          console.log(p.fields);
        return p.fields;
      } else {
        return null;
      }
      // return p.fields;
    });
  
    const [posts] = rawPosts.filter((p) => p);
  
    return {
      props: {
        posts,
      },
    };
  };
  