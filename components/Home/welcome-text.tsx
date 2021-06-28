import React, { Component, FC } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const WelcomeSlice = styled.div`
  background-color: ${colors.mainPink};
  color: white;
max-width: 50%;
text-align: center;
display: flex;
align-items: center;
padding: 10% 8%;
flex-direction: column;
`;
const Title = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-size: 36px;
`;

const Text = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 24px;
`;

const WelcomeText: FC = () => {
  return (
    <WelcomeSlice>
      <Title> Title goes Here</Title>
      <Text>
        "Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi.
      </Text>
    </WelcomeSlice>
  );
};

export default WelcomeText;
