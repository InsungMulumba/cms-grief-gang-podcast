import Head from "next/head";
import styled from "styled-components";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/pageWithLayout";
import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import WelcomeSlice from "../components/Home/WelcomeSlice";
import AboutSlice from "../components/Home/About";
import MediaSlice from "../components/Home/Media";
import BannerSlice from "../components/Home/Banner";
import SignUpSlice from "../components/Home/SignUp";
import PicturesGrid from "../components/Home/PicturesGrid";
import WelcomeText from "../components/Home/WelcomeSlice";
import Header from "../components/Header/Header";
import getPageContentBySlug from "../utils/contentfulApi";
import { homeQuery } from "../utils/queries";

interface contentfulDataTypes {
  aboutSlice: string;
  welcomeSlice: string;
  mediaLink: any;
}

const Slice = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

const Container = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

interface HomeProps {
  posts: contentfulDataTypes;
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <Container>
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
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <BannerSlice />

      <WelcomeText data={posts.welcomeSlice} />
      {/* <PicturesGrid /> */}
      {/* </AboveTheFold> */}
      <AboutSlice data={posts.aboutSlice} />
      <MediaSlice data={posts.mediaLink} />
      <SignUpSlice />
      {/* <main>

      </main> */}

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
    </Container>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;

export default Home;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const posts = await getPageContentBySlug(
    homeQuery,
    "homepageCollection"
  );

  return {
    props: {
      posts,
    },
  };
};
