import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import styled from "styled-components";
import { colors, spacing } from "../styles/constants";
import PageWithLayoutType from "../types/pageWithLayout";
import Header from "../components/Header/Header";
import Head from "next/head";
import TitleH1 from "../styles/headings";
import { GetStaticProps } from "next";
import { getPageContentBySlug } from "../utils/contentfulApi";
import { faqQuery, acastQuery } from "../utils/queries";
import Accordion from "components/Accordion/Accordion";

const Root = styled.div`
  display: flex;
  background-color: ${colors.brownCream};
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

const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    width: 50%;
    align-self: center;
    padding: 0px;

    justify-content: flex-start;
    padding-top: 50px;
  }
`;

const Title = styled(TitleH1)`
  color: ${colors.burntOrange};
  text-align: center;
  margin-top: 0px;
`;

const Text = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 24px;
  color: ${colors.burntOrange};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  @media (min-width: 1280px) {
    margin-bottom: 32px;
    text-align: center;
  }
`;

const AcastContainer = styled.div`
  @media (max-width: 1279px) {
  }

  @media (min-width: 1280px) {
    padding: 20px 0px;
  }
  margin: 40px 0px;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  /* width: 100%; */

  @media (min-width: 1280px) {
    /* max-height: 90%; */
    text-align: left;
    /* padding: 0px 25%; */
  }
`;

type faq = {
  question: String;
  answer: String;
  orderNumber: Number;
  // header: String;
  // content: String;
};
interface PodcastProps {
  faqs: faq[];
  acastLink?: any;
}

const Podcast: FC<PodcastProps> = ({ faqs, acastLink }) => {
  console.log(acastLink);

  const PodLink =
    acastLink[0].url ??
    "https://embed.acast.com/61853de864f92b00193bfaae/623dd60393448e0012f67f97";
  return (
    <>
      <Header showBulletin={false} />
      <Root>
        {/* <HeroBanner> */}
        <PageContent>
          <HeroText>
            <Title>{acastLink[0].pageTitle}</Title>
          </HeroText>
          <AcastContainer>
            <iframe
              title="Embed Player"
              width="100%"
              height="100%"
              src={PodLink}
              scrolling="no"
              frameBorder="0"
            ></iframe>
          </AcastContainer>
          <Accordion items={faqs} />
        </PageContent>
      </Root>
    </>
  );
};

(Podcast as PageWithLayoutType).layout = MainLayout;

export default Podcast;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const faqs = await getPageContentBySlug(faqQuery, "faqCollection");
  const acastLink = await getPageContentBySlug(
    acastQuery,
    "acastLinkCollection"
  );

  return {
    props: {
      faqs,
      acastLink,
    },
  };
};
