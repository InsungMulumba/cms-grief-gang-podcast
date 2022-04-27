import React, { FC } from "react";
import { GetStaticProps } from "next";
import MainLayout from "../layouts/mainLayout";
import { colors, spacing } from "../styles/constants";
import { parseISO, format } from "date-fns";
import styled from "styled-components";
import PageWithLayoutType from "../types/pageWithLayout";
import Header from "../components/Header/Header";
import TitleH1 from "../styles/headings";
import { getPageContentBySlug } from "../utils/contentfulApi";
import { eventsQuery } from "../utils/queries";
import Head from "next/head";

const Root = styled.div`
  display: flex;
  background-color: ${colors.burntOrange};
  justify-content: center;
  flex-direction: row;
  min-height: calc(100vh - 120px);
  padding: ${spacing.mobilePageGutter};
  @media (min-width: 1280px) {
    padding: ${spacing.desktopPageGutter};
  }
`;

const PageContent = styled.div`
  margin: 0px;

  @media (min-width: 1280px) {
    margin: 0px;
    width: 80%;
  }
`;

const EventsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  @media (max-width: 1280px) {
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
  li {
    list-style-type: none;
  }
`;
const Event = styled.li`
  display: flex;
  background-color: ${colors.cream};
  margin: 25px 0px;

  filter: drop-shadow(rgba(0, 0, 0, 0.05) 0px 4px 8px);

  border-radius: 20px;

  @media (max-width: 1280px) {
    flex-direction: column;
    width: 45%;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
    width: 100%;
    flex-direction: column;
  }
`;

const EventDate = styled.div`
  background-color: ${colors.brownCream};
  color: ${colors.burntOrange};
  padding: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
  @media (min-width: 767px) {
    width: 150px;
  }
`;
const EventInfo = styled.a`
  background-color: ${colors.bubblegumPink};
  color: ${colors.cream};
  padding: 20px;
  position: absolute;
  right: 20px;
  bottom: 0;
  @media (min-width: 767px) {
    right: 150px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const EventPictureContainer = styled.a`
  height: 250px;
  min-width: 250px;

  @media (max-width: 1280px) {
    width: 100%;
    height: 334px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    max-height: 334px;
  }
`;

const EventPicture = styled.img`
  min-width: 250px;
  height: 250px;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (max-width: 1280px) {
    width: 100%;
    height: 334px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 20px;
  }

  object-fit: cover;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    max-height: 334px;
  }
`;

const EventDescription = styled.div`
  padding: 20px;
  font-family: "Spartan", sans-serif;
  margin-bottom: 50px;
`;
const Title = styled(TitleH1)`
  color: white;
  text-align: center;
  margin-top: 0px;
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
`;

const Text = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  @media (min-width: 1280px) {
    margin-bottom: 32px;
    text-align: center;
  }
`;

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

interface EventsProps {
  events: any;
}
// TODO PHONE VIEW
const Events: FC<EventsProps> = ({ events }) => {
  const orderedEvents = (unorderedSlices: any) => {
    return unorderedSlices.sort(({ date: a }, { orderNumber: b }) => a - b);
  };

  return (
    <>
      <Head>
        <title>The Grief Gang | Events</title>
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
        <PageContent>
          <HeroText>
            <Title>Events</Title>
            <Text>Check out our events below</Text>
          </HeroText>
          <EventsContainer>
            {events.map((event, idx) => (
              <Event key={idx}>
                <EventDate>
                  {format(parseISO(event.date), "dd MMM yyyy")}
                </EventDate>
                <EventInfo href={event.info} target="_blank">
                  More info
                </EventInfo>{" "}
                <EventPictureContainer href={event.info} target="_blank">
                  <EventPicture src={event.picture.url} />
                </EventPictureContainer>
                <EventDescription>{event.description}</EventDescription>
              </Event>
            ))}
          </EventsContainer>
        </PageContent>
      </Root>
    </>
  );
};

(Events as PageWithLayoutType).layout = MainLayout;

export default Events;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const events = await getPageContentBySlug(eventsQuery, "eventCollection");
  return {
    props: {
      events,
    },
  };
};
