import React, { Component, FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import TitleH1 from "../../styles/headings";
import Header from "../Header/Header";
import SocialMediaLinks from "./SocialMediaBar";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface CoupleSliceProps {
  textTitle?: string;
  textContent?: string;
  backgroundColor?: string;
  desktopMaxHeight?: string;
  reverseSliceOrder?: boolean;
  orderNumber: number;
  mainContent?: any;
  mainImage?: {
    title: string;
    url: string;
  };
}

interface WelcomeProps {
  data: CoupleSliceProps;
  setHeight?: boolean;
}

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

const Root = styled.div<{
  bgColor: string;
  desktopMaxHeight: string;
  setHeight: boolean;
}>`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : colors.mainPink};

  color: white;
  /* max-height: calc(100vh - 120px); */
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1280px) {
    height: ${(props) => (props.setHeight ? "100vh" : "auto")};
  }
`;

const Title = styled(TitleH1)``;

const Text = styled.p`
  font-family: " Spartan", sans-serif;
  font-size: 18px;

  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  @media (min-width: 1280px) {
    margin-bottom: 32px;
    font-size: 26px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  @media (min-width: 1280px) {
    object-fit: cover;
    height: 100%;
    box-shadow: 0 10px 16px 5px rgb(0 0 0 / 20%);
    &.rubber-band {
      animation: ${FadeIn} 2.5s ease 0.5s both;
    }
  }
`;

const HeroImageContainer = styled.div`
  @media (min-width: 1280px) {
    width: 50%;
    height: 100%;
  }
`;

const HeroPaddingLarge = "20px 80px";
const HeroBanner = styled.div<{ orderNumber: Number }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    flex-direction: ${(props) =>
      props.orderNumber % 2 === 0 ? "row" : "row-reverse"};
    padding: 0px;
    /* min-height: calc(100vh - 120px); */
    max-height: 100%;
    /* max-height: 70vh; */
  }

  &.fade {
    animation: ${FadeIn} 1.5s ease 0.5s both;
  }
`;
const HeroText = styled.div<{ image: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  /* width: 100%; */

  @media (max-width: 1279px) {
    padding: 20px 40px;
  }

  @media (min-width: 1280px) {
    width: ${(props) => (props.image ? "50%" : "auto")};
    /* max-height: 90%; */
    justify-content: flex-start;

    text-align: left;
    /* padding: 0px 50px; */
    padding: ${HeroPaddingLarge};
    /* justify-content: start; */
  }
`;

const options = {
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const Couple: FC<WelcomeProps> = ({ data, setHeight }) => {
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
    <Root
      bgColor={data.backgroundColor}
      desktopMaxHeight={data.desktopMaxHeight}
      setHeight={setHeight}
    >
      <HeroBanner orderNumber={data.orderNumber} id="animate-fade">
        <HeroText image={data.mainImage}>
          <Title>{data.textTitle}</Title>
          <Text>
            {documentToReactComponents(data.mainContent.json, options)}
          </Text>
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
