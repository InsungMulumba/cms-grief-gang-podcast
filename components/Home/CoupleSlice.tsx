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

const Root = styled.div<{ bgColor: string }>`
  background-color: ${props => props.bgColor ? props.bgColor : colors.mainPink};
  
  ;
  color: white;

  text-align: center;
  display: flex;
  align-items: center;
  padding: 0%;
  flex-direction: column;
  /* @media (min-width: 1280px) {
    height: 100vh;
    max-height: 100vh;
  } */
`;

const Title = styled(TitleH1)``;

const Text = styled.p`
  font-family: " Spartan", sans-serif;
  font-size: 18px;

  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  @media (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  @media (min-width: 1280px) {
    max-height: 100%;
    object-fit: cover;
    /* padding: 40px 80px; */
    box-shadow: 0 10px 16px 5px rgb(0 0 0 / 20%);
    &.rubber-band {
      animation: ${FadeIn} 2.5s ease 0.5s both;
    }
  }
`;

const HeroImageContainer = styled.div`
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0px;
    height: calc(100vh - 160px);
    /* max-height: 70vh; */
  }


  &.fade {
      animation: ${FadeIn} 1.5s ease 0.5s both;
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
    width: 50%;
    /* max-height: 90%; */
    text-align: left;
    padding: 0px 50px;

  }
`;

interface CoupleProps {
  textTitle?: string;
  textContent?: string;
  backgroundColor?: string;
  order?
  mainImage?: {
    title: string;
    url: string;
  };
}

interface WelcomeProps {
  data: CoupleProps;
}

const Couple: FC<WelcomeProps> = ({ data }) => {

  useEffect(() => {
    const mySlice = document.querySelector("#animate-fade");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          // console.log("in the view");
          mySlice.classList.add("fade");
          // observer.unobserve;
        }
      });
    });

    observer.observe(mySlice);
  }, []);

  return (
    <Root bgColor={data.backgroundColor}>
      <HeroBanner id="animate-fade">
        <HeroText>
          <Title>{data.textTitle}</Title>
          <Text>{data.textContent}</Text>
        </HeroText>
        {data.mainImage && (
          <HeroImageContainer>
            <HeroImage
              src={data.mainImage?.url}
              alt="Amber Home Page Picture"
              crossOrigin="anonymous"
            />
          </HeroImageContainer>
        )}
      </HeroBanner>
    </Root>
  );
};

export default Couple;
