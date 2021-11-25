import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import styled from "styled-components";
import colors from "../styles/colors";
import PageWithLayoutType from "../types/pageWithLayout";
import Header from "../components/Header/Header";
import TitleH1 from "../styles/headings";

import Head from "next/head";

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
    align-self: center;
    padding: 0px;
    justify-content: flex-start;
    height: calc(100vh - 120px);
    padding-top: 50px;
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
    max-height: 150px;
    text-align: left;
    margin-bottom: 40px;
    /* padding: 0px 25%; */
  }
`;
const Title = styled(TitleH1)`
  color: white;
  text-align: center;
`;

const EventContainer = styled.div`
  width: 100%;
  max-height: calc(100vh - 360px);
  display: flex;
  background-color: #f2d7d1;
`;

const Gala = styled.img`
  object-fit: contain;
  width: 50%;
  height: 100%;
`;

const EventText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 50px;
`;
const Text = styled.p`
  font-family: " Spartan", sans-serif;
  font-size: 32px;
  color: white;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  margin: 0px;
`;

const EventsGalaText =
  "We are delighted to announce that along with The Grief Gang, TNN are hosting a Christmas Party - The Grief Christmas Gala.";

  // TODO PHONE VIEW
const Events: FC = () => {
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
      <Header isMain={true} showBulletin={false} />

      <Root>
        <HeroBanner>
          <HeroText>
            <Title>Events</Title>
          </HeroText>
          <EventContainer>
            <Gala src="/Events/gala.jpg" />
            <EventText>
              <Text>{EventsGalaText} </Text>
            </EventText>
          </EventContainer>

        </HeroBanner>
      </Root>
    </>
  );
};

(Events as PageWithLayoutType).layout = MainLayout;

export default Events;
