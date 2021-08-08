import React, { Component, FC } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import TitleH1 from "../../styles/headings";
import Header from "../../components/Header/Header";

const WelcomeSlice = styled.div`
  background-color: ${colors.mainPink};
  color: white;
  /* @media (min-width: 767px) {
    max-width: 50%;
  } */
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0%;
  flex-direction: column;
  @media (min-width: 767px) {
  height: 100vh;}
`;

const Title = styled(TitleH1)`
margin-top: 0;
`;

const Text = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 24px;
`;

const HeroImage = styled.img`
width: 100%;
object-fit: cover;
 @media (min-width: 767px) {
  width: 40%;
  height: 80%;
  object-fit: cover;
  padding: 50px 80px;}

`;
const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 767px) {
    flex-direction: row;

  }
`;
const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  text-align: center;

  @media (min-width: 767px) {
    width: 30%;
    text-align: left;

  }

`;
interface WelcomeProps {
  data: string;
}
const WelcomeText: FC<WelcomeProps> = ({ data }) => {
  return (
    <WelcomeSlice>
      <Header isMain={true} />
      <HeroBanner>
        <HeroText>
          <Title> The Podcast Normalising Grief</Title>
          <Text>{data}</Text>
        </HeroText>
        <HeroImage
          src="/Home/amber-secondary.jpg"
          alt="Amber Home Page Picture"
          crossOrigin="anonymous"
        />
      </HeroBanner>
    </WelcomeSlice>
  );
};

export default WelcomeText;
