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
  background-color: ${colors.burntOrange};
  justify-content: center;
  flex-direction: column;
  height: 100vh;
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
  max-width: 70%;
  margin: auto;
`;

const EventContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #f2d7d1;
  flex-direction: column;
  @media (min-width: 1280px) {
    flex-direction: row;
    max-height: calc(100vh - 360px);
  }
`;

const Gala = styled.img`
  object-fit: contain;
  width: 50%;

  @media (max-width: 1280px) {
    width: 100%;
  }
  height: 100%;
`;

const EventText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 50px;
  @media (min-width: 1280px) {
    padding: 50px;
  }
`;
const Text = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  margin: 0px;
  margin-bottom: 30px;
`;

const EventsGalaText = (
  <>
    We are delighted to announce that along with TNN, The Grief Gang are hosting
    a Christmas Party - The Grief Christmas Gala. <br /> We have a number of
    great speakers on our panel and a wide number of activites planned for the
    night.
    <br /> <br /> Tickets and more info can be accessed via the link below!
  </>
);

const EventButton = styled.a`
  border-radius: 500px;
  border: 1px solid white;
  color: white;
  width: fit-content;
  padding: 20px;
  align-self: center;
  margin: 50px 0px;
  @media (min-width: 1280px) {
    margin: 0px;
  }
`;
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
      <Header showBulletin={false} />

      <Root>
        <Title>
          We have a whole host of parties and events being planned behind the
          scenes. <br /> Stay tuned for more announcements!
        </Title>
        {/* <HeroBanner>
          <HeroText>
            <Title>Events</Title>
          </HeroText>
          <EventContainer>
            <Gala src="/Events/gala.jpg" />
            <EventText>
              <Text>{EventsGalaText} </Text>
              <EventButton target='_blank' href='https://www.eventbrite.com/e/the-christmas-grief-gala-tickets-203269403257'>Tickets & More info</EventButton>
            </EventText>
          </EventContainer>
        </HeroBanner> */}
      </Root>
    </>
  );
};

(Events as PageWithLayoutType).layout = MainLayout;

export default Events;
