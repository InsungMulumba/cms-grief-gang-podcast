import React, { Component, FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import TitleH1 from "../../styles/headings";
import Header from "../Header/Header";
import SocialMediaLinks from "./SocialMediaBar";

const SlideInFromLeft = keyframes`
    0% {
      left: 100%;
      opacity: 0%;
    }
    100% {
      left: 0;
      opacity: 100%;
    }
`;

const RubberBand = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
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
  }
`;

const Title = styled(TitleH1)`
  margin-top: 0;

  @media (min-width: 1280px) {
    font-size: 36px;
  }
  @media (min-width: 1280px) {
    font-size: 56px;
  }
`;

const Text = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  @media (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  @media (min-width: 1280px) {
    width: 40%;
    max-height: 90%;
    object-fit: cover;
    padding: 40px 80px;
    &.rubber-band {
      animation: ${RubberBand} 1.5s ease-out 0.5s both;
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
  }
`;
const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  text-align: center;
  justify-content: space-between;
  /* width: 100%; */

  @media (min-width: 1280px) {
    width: 50%;
    max-height: 80%;
    text-align: left;
    animation: ${SlideInFromLeft} 2.5s ease-out 1.5s both;
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
