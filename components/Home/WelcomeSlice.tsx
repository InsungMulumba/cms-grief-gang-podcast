import React, { Component, FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import TitleH1 from "../../styles/headings";
import Header from "../Header/Header";
import SocialMediaLinks from "./SocialMediaBar";

const FadeIn = keyframes`
    0% {
 /* margin-left: -50%; */
 opacity: 0;
    }
    100% {
      /* margin-left: 0%; */
opacity: 1;
    }
`;

const SlideIn = keyframes`
  0% {
    margin-right: -100%;
  }

  100% {
    margin-right: 0%;

  }
`;

const Root = styled.div`
  background-color: ${colors.mainPink};
  color: white;
  /* @media (min-width: 1280px) {
    max-width: 50%;
  } */
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0%;
  flex-direction: column;
  @media (min-width: 1280px) {
    height: 100vh;
    max-height: 100vh;
  }
`;

const Title = styled(TitleH1)`
  @media (min-width: 1280px) {
    font-size: 72px;
  }
`;

const Text = styled.p`
  font-family: " Spartan", sans-serif;
  font-size: 18px;

  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  @media (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  @media (min-width: 1280px) {
    width: 30%;
    max-height: 80%;
    object-fit: cover;
    /* padding: 40px 80px; */
    box-shadow: 0 10px 16px 5px rgb(0 0 0 / 20%);
    &.rubber-band {
      animation: ${SlideIn} 2.5s ease 0.5s both;
    }
  }
`;
const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 20px 0px;
    /* max-height: 70vh; */
  }
`;
const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  /* width: 100%; */

  @media (max-width: 1279px) {
    padding: 20px 40px;
  }

  @media (min-width: 1280px) {
    width: 40%;
    max-height: 90%;
    text-align: left;
    margin-right: 5%;

    animation: ${FadeIn} 2.5s ease-out 1.5s both;
  }
`;

interface WelcomeProps {
  data: string;
}
const WelcomeText: FC<WelcomeProps> = ({ data }) => {
  useEffect(() => {
    const myImg = document.querySelector("#animate-rubber-band");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          // console.log("in the view");
          myImg.classList.add("rubber-band");
          // observer.unobserve;
        } else {
          // console.log("out of view");
        }
      });
    });

    observer.observe(myImg);
  }, []);

  return (
    <Root>
      <Header isMain={true} />
      <HeroBanner>
        <HeroText>
          <Title> The Podcast Normalising Grief</Title>
          <Text>{data}</Text>
          <SocialMediaLinks />
        </HeroText>
        <HeroImage
          id="animate-rubber-band"
          src="/Home/amber-secondary.jpg"
          alt="Amber Home Page Picture"
          crossOrigin="anonymous"
        />
      </HeroBanner>
    </Root>
  );
};

export default WelcomeText;
