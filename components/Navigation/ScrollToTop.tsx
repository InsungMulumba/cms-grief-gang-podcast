import React, { Component, FC, useEffect } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Root = styled.a`
  position: fixed;
  display: flex;
  padding: 15px;
  inset: auto 5% 5% auto;
  border-radius: 50%;
  background-color: white;
  color: ${colors.burntOrange};
  font-size: 50px;
  justify-content: center;
  width: 100px;
  height: 100px;
  line-height: 100px;
  opacity: 0.5;
  text-align: center;

  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 30px;
    justify-content: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
  &.hide {
    display: none;
  }
`;

const WatchPixel = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  top: calc(100vh + 200px);
  left: 0;
`;

const Arrow = styled.img``;
const ScrollToTop: FC = () => {
  useEffect(() => {
    const scrollButton = document.querySelector("#top-button");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].boundingClientRect.y < 0) {
        console.log("Past 100px!");
        scrollButton.classList.remove("hide");
      } else {
        console.log("Not past 100px");
        scrollButton.classList.add("hide");
      }
    });
    observer.observe(document.querySelector("#pixel-to-watch"));
  }, []);

  return (
    <>
      <Root id="top-button" href="#home">
        <Arrow src="/Home/up-arrow.svg" />{" "}
      </Root>
      <WatchPixel id="pixel-to-watch" />
    </>
  );
};

export default ScrollToTop;
