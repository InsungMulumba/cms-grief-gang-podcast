import React, { Component, FC } from "react";
import styled from "styled-components";

const BannerImageContainer = styled.div`
  background-image: url('/Home/amber-main.jpg');

/* Set a specific height */
height: 100vh;
width: 100%;
overflow: hidden;

/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
const Banner: FC = () => {
    return (
        <BannerImageContainer />
    );
  };
  
  export default Banner;