import Head from "next/head";
import styled from "styled-components";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/pageWithLayout";
import React, { FC } from "react";
import { fetchEntries } from "../utils/contentfulPosts";
import MainLayout from "../layouts/mainLayout";
import WelcomeSlice from "../components/Home/WelcomeText";
import AboutSlice from "../components/Home/About";
import BannerSlice from "../components/Home/Banner";
import SignUpSlice from "../components/Home/SignUp";
import PicturesGrid from "../components/Home/PicturesGrid";
import WelcomeText from "../components/Home/WelcomeText";
import Header from "../components/Header/Header";



interface contentfulDataTypes {
  aboutSlice: string;
  welcomeSlice: string;
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

const Slice = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

const AboveTheFold = styled(Slice)`
  flex-direction: column;
  @media (max-width: 1280px) {
  }
`;
interface HomeProps {
  posts: contentfulDataTypes;
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
      {/* <PicturesCarousel /> */}
      <AboveTheFold>
        <BannerSlice />
        
        <WelcomeText data={posts.welcomeSlice}/>
        {/* <PicturesGrid /> */}
      </AboveTheFold>
      <AboutSlice data={posts.aboutSlice} />

      <SignUpSlice />
      <main>

      </main>

      {/* <Footer /> */}

      <style jsx>{`
        .container {
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

  const rawPosts = await res.map((p) => {

    if (p.sys.contentType.sys.id === "homepage") {
      return p.fields;
    } 
    else { 
      return null
    }
    // return p.fields;
  });

  const [posts] = rawPosts.filter(p => p);

  return {
    props: {
      posts,
    },
  };
};
