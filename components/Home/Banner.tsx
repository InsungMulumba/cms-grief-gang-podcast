import React, { Component, FC } from "react";
import styled, { keyframes } from "styled-components";
import colors from "styles/colors";

const OverlaySlideIn = keyframes`
    0% {
      top: -100%;
      opacity: 0%;
    }
    100% {
      top: 0px;
      opacity: 50%;
    }
`;

const SlideInLogo = keyframes`
    0% {
      left: -40%;
      /* opacity: 0%; */
    }
    100% {
      left: 20;
      /* opacity: 100%; */
    }
`;

const BannerOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.mainPink};
  position: absolute;
  opacity: 0.5;
  animation: ${OverlaySlideIn} 1.5s ease-out 1.5s both;
`;

const BannerImageContainer = styled.div`
  background-image: url("/Home/amber-main.jpg");

  /* Set a specific height */
  height: 100vh;
  width: 100%;
  overflow: hidden;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 20%;
  height: 200px;
  width: 200px;
  left: 20%;
  animation: ${SlideInLogo} 1.5s ease-out 2.5s both;

`;
const Banner: FC = () => {
  return (
    <>
      <BannerImageContainer />
      <BannerOverlay />
      <Logo
        src="/logo.jpg"
        alt="Grief Gang Podcast logo"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Banner;
