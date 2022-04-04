import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import styled from "styled-components";
import colors from "../styles/colors";
import PageWithLayoutType from "../types/pageWithLayout";
import Header from "../components/Header/Header";
import Head from "next/head";
import TitleH1 from "../styles/headings";
import Media from "../slices/AsSeenOnSlice/Media";

const Root = styled.div`
  display: flex;
  background-color: ${colors.mainPink};
  justify-content: center;
  flex-direction: column;
`;

const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    width: 50%;
    align-self: center;
    padding: 0px;
    height: calc(100vh - 120px);
    justify-content: flex-start;
    padding-top: 50px;
  }
`;

const Title = styled(TitleH1)`
  color: white;
  text-align: center;
`;

const Text = styled.p`
  font-family: " Spartan", sans-serif;
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  @media (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

const AcastContainer = styled.div`
  @media (max-width: 1279px) {
    padding: 20px 40px;
  }

  @media (min-width: 1280px) {
    /* padding: 0px 25%; */
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  /* width: 100%; */

  @media (max-width: 1279px) {
    padding: 20px 40px;
  }

  @media (min-width: 1280px) {
    /* max-height: 90%; */
    text-align: left;
    /* padding: 0px 25%; */
  }
`;

const Podcast: FC = () => {
  return (
    <>
      <Head>
        <title>The Grief Gang | Podcast</title>
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
      <Header showBulletin={false} />
      <Root>
        <HeroBanner>
          <HeroText>
            <Title>Podcast</Title>
            <Text>
              You can listen and subscribe to The Grief Gang podcast on all
              major podcast platforms or press play on the playlist provided.
            </Text>
          </HeroText>
          <AcastContainer>
            <iframe
              title="Embed Player"
              width="100%"
              height="138px"
              src="https://embed.acast.com/s/the-grief-gang"
              scrolling="no"
              frameBorder="0"
            ></iframe>
          </AcastContainer>
          {/* <SocialMediaLinks /> */}
        </HeroBanner>
        {/* <Media /> */}
      </Root>
    </>
  );
};

(Podcast as PageWithLayoutType).layout = MainLayout;

export default Podcast;
