import React, { Component, FC } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import TitleH1 from "../../styles/headings";

const WelcomeSlice = styled.div`
  background-color: ${colors.mainPink};
  color: white;
  /* @media (min-width: 767px) {
    max-width: 50%;
  } */
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10% 8%;
  flex-direction: column;
`;

// const Title = styled.h1`
//   font-family: "Noto Sans", sans-serif;
//   font-size: 80px;
// `;

const Text = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 24px;
`;
interface WelcomeProps {
  data: string;
}
const WelcomeText: FC<WelcomeProps> = ({ data }) => {
  return (
    <WelcomeSlice>
      <TitleH1> The Podcast Normalising Grief</TitleH1>
      <Text>{data}</Text>
    </WelcomeSlice>
  );
};

export default WelcomeText;
