import React, { Component, FC } from "react";
import styled, { keyframes } from "styled-components";
import colors from "styles/colors";
import { isSafari, isMobileSafari } from "react-device-detect";

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
    }
    100% {
      left: 20;
    }
`;

const Bounce = keyframes`
 0% {
  transform: translateY(0px);
 }

 50% {
  transform: translateY(20px);
 }

 100% {
  transform: translateY(0px);
 }
`;

const FadeIn = keyframes`
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
`;

const BannerOverlay = styled.a`
  width: 100%;
  height: 100vh;
  /* background-color: ${colors.mainPink}; */
  position: absolute;
  opacity: 0.5;
  animation: ${OverlaySlideIn} 1.5s ease-out 1.5s both;
`;

const BannerImageContainer = styled.div`
  /* background-image: url("/Home/amber-main.jpg"); */

  /* Set a specific height */
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Chrome version 29 and above */
  @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    selector {
      /* Create the parallax scrolling effect */
      background-attachment: "fixed";
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20%;
  height: 200px;
  width: 200px;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${SlideInLogo} 1.5s ease-out 2.5s both;
  @media (max-width: 1279px) {
    height: auto;
    width: 100vw;
    padding: 0px 60px;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
`;

const ArrowDown = styled.img`
  height: 65px;
  width: 65px;
  animation: ${Bounce} 1.5s linear infinite;
`;

const ArrowDownContainer = styled.div`
  animation: ${FadeIn} 1.5s ease-out 2.5s both;

  position: absolute;
  left: 0%;
  right: 0%;
  display: flex;
  bottom: 5%;
  justify-content: center;
`;

const Slogan = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.secondary};
  font-size: 64px;
  font-weight: 900;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${FadeIn} 1.5s ease-out 0.5s both;

  @media (max-width: 1279px) {
    top: 5%;
    left: 0%;
    transform: none;
    font-size: 32px;
    padding: 0px 60px;
  }
`;

function scrollToHome(e) {
  e.preventDefault();
  const el = document.getElementById("home");
  el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

const Banner: FC = () => {
  return (
    <>
      <BannerImageContainer className="banner" id="banner" />
      <BannerOverlay href="/" onClick={scrollToHome} />
      <Logo
        onClick={scrollToHome}
        src="/logo.jpg"
        alt="Grief Gang Podcast logo"
        crossOrigin="anonymous"
      />
      <Slogan>
        Welcome to the gang. <br /> The one you never asked to be a part of.
      </Slogan>
      <ArrowDownContainer>
        <ArrowDown
          onClick={scrollToHome}
          src="/Home/down-arrow-black.png"
          alt="Scroll Down Button"
          crossOrigin="anonymous"
        />
      </ArrowDownContainer>
    </>
  );
};

export default Banner;
