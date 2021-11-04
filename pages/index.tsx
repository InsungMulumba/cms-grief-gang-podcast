import Head from "next/head";
import styled from "styled-components";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/pageWithLayout";
import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import WelcomeSlice from "../components/Home/WelcomeSlice";
import AboutSlice from "../components/Home/About";
import MediaSlice from "../components/Home/Media";
import CoupleSlice from "components/Home/CoupleSlice";
import BannerSlice from "../components/Home/Banner";
import SignUpSlice from "../components/Home/SignUp";
import PicturesGrid from "../components/Home/PicturesGrid";
import ScrollButton from "../components/Navigation/ScrollToTop";
import Header from "../components/Header/Header";
import getPageContentBySlug from "../utils/contentfulApi";
import { homeQuery, newHomeQuery } from "../utils/queries";

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
  oldPosts: contentfulDataTypes;
  newPosts: any[];
}

const orderedSlices = (unorderedSlices: any) => {

  return unorderedSlices.sort(({orderNumber:a}, {orderNumber:b}) => a-b);
}

const Home: FC<HomeProps> = ({  newPosts }) => {
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
      {
        <>
<ScrollButton />
          <Header showBulletin={true} isMain={true} />

          <CoupleSlice data={orderedSlices(newPosts)[0]} />
          <CoupleSlice data={orderedSlices(newPosts)[1]} />

          {/* <AboutSlice data={oldPos ts.aboutSlice} /> */}
          
          <SignUpSlice />
        </>
      }

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
  const oldPosts = await getPageContentBySlug(homeQuery, "homepageCollection");
  const newPosts = await getPageContentBySlug(newHomeQuery, "homeCollection");

  const posts = String(newPosts);

  return {
    props: {
      oldPosts,
      newPosts,
    },
  };
};
