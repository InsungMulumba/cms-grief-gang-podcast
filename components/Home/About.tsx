import React, { Component, FC } from "react";
import styled from "styled-components";
import { TitleH2 } from "styles/headings";
import SocialMediaLinks from '../../components/Home/SocialMediaBar';
import colors from "../../styles/colors";

const AboutSlice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;
  /* background-color: red; */
`;

const Title = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 80px;
`;

const Content = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
`;

interface AboutProps {
  data: string;
}
const About: FC<AboutProps> = ({ data }) => {
  //   console.log(`asc ${aboutSliceContent}`);
  return (
    <AboutSlice>
      <TitleH2>About</TitleH2>
      <Content>{data} </Content>
      <SocialMediaLinks />
    </AboutSlice>
  );
};

export default About;
