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

const SlideInArrow = keyframes`
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
  background-color: ${colors.mainPink};
  position: absolute;
  opacity: 0.5;
  animation: ${OverlaySlideIn} 1.5s ease-out 1.5s both;
`;

const BannerImageContainer = styled.div`
  background-image: url("/Home/amber-main-webp.webp");

  /* Set a specific height */
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      .safari_only {
        background-attachment: scroll;
        background-image: url("/Home/amber-main.jpg");

      }
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20%;
  height: 200px;
  width: 200px;
  left: 20%;
  animation: ${SlideInLogo} 1.5s ease-out 2.5s both;
  @media (max-width: 1279px) {
    height: 250px;
    width: 250px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ArrowDown = styled.img`
  height: 45px;
  width: 45px;
  animation: ${Bounce} 1.5s linear infinite;
`;

const ArrowDownContainer = styled.div`
  animation: ${SlideInArrow} 1.5s ease-out 2.5s both;

  position: absolute;
  left: 0%;
  right: 0%;
  display: flex;
  bottom: 5%;
  justify-content: center;
`;

function scrollToHome(e) {
  e.preventDefault();
  const el = document.getElementById("home");
  el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

const Banner: FC = () => {
  return (
    <>
      <BannerImageContainer className="safari_only" />
      <BannerOverlay href="/" onClick={scrollToHome} />
      <Logo
        onClick={scrollToHome}
        src="/logo.jpg"
        alt="Grief Gang Podcast logo"
        crossOrigin="anonymous"
      />
      <ArrowDownContainer>
        <ArrowDown
          onClick={scrollToHome}
          src="/Home/down-arrow.png"
          alt="Scroll Down Button"
          crossOrigin="anonymous"
        />
      </ArrowDownContainer>
    </>
  );
};

export default Banner;
