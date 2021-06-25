import Head from "next/head";
import styled from "styled-components";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/pageWithLayout";
import React, { FC } from "react";
import { fetchEntries } from "../utils/contentfulPosts";
import MainLayout from "../layouts/mainLayout";

// function MyApp({ Component, pageProps }: AppLayoutProps) {
// export default function Home({ posts }) {

interface contentfulDataTypes {
  testText: string;
}

const TextBox = styled.div`
  background-color: black;
  color: white;
  display: flex;
  max-width: 80%;
  font-family: "Noto Sans", sans-serif;
  padding: 10%;
  letter-spacing: 1.1px;
`;
interface HomeProps {
  posts: Array<contentfulDataTypes>;
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <div className="container">
      <Head>
        <title>The Grief Gang</title>
        <link rel="icon" href="/logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        {/* <Header /> */}
        <TextBox>
          {posts.map((p) => {
            return <div key={posts.indexOf(p)}>{p.testText}</div>;
            // return <Post key={p.date} date={p.date} title={p.title} />
          })}
        </TextBox>
      </main>

      {/* <Footer /> */}

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
};
