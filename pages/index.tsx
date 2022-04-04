import Head from "next/head";
import styled from "styled-components";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/pageWithLayout";
import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import WelcomeSlice from "../components/Home/WelcomeSlice";
import MediaSlice from "../slices/AsSeenOnSlice/Media";
import CoupleSlice from "components/Home/CoupleSlice";
import BannerSlice from "../components/Landing/Banner";
import SignUpSlice from "../components/Home/SignUp";
import PicturesGrid from "../components/Home/PicturesGrid";
import Header from "../components/Header/Header";
import { getPageContentBySlug } from "../utils/contentfulApi";
import { faqQuery, newHomeQuery } from "../utils/queries";
import MiscSlice from "../slices/AsSeenOnSlice/Slice";

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
`;

interface HomeProps {
  oldPosts: contentfulDataTypes;
  newPosts: any[];
}

const orderedSlices = (unorderedSlices: any) => {
  return unorderedSlices.sort(
    ({ orderNumber: a }, { orderNumber: b }) => a - b
  );
};

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Home: FC<HomeProps> = ({ newPosts }) => {
  console.log(newPosts);

  return (
    <Container>
      <BannerSlice />
      {
        <>
          <Header showBulletin={true} />

          <CoupleSlice data={orderedSlices(newPosts)[0]} setHeight={true} />
          <CoupleSlice data={orderedSlices(newPosts)[1]} />
          <MiscSlice />
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
  const newPosts = await getPageContentBySlug(newHomeQuery, "homeCollection");
  const faqs = await getPageContentBySlug(faqQuery, "faqCollection");

  return {
    props: {
      newPosts,
      faqs,
    },
  };
};
