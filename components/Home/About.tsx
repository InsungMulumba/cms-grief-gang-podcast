import React, { Component, FC } from "react";
import styled from "styled-components";
import { TitleH2, SliceContent } from "styles/headings";
import SocialMediaLinks from "../../components/Home/SocialMediaBar";
import colors from "../../styles/colors";
import ButtonBase from "components/Navigation/ButtonBase";

const AboutSlice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  padding-bottom: 60px;
  background-color: #f2d7d1;
  @media (min-width: 1280px) {
    padding: 20px 120px;
  }
`;

const Content = styled(SliceContent)`
  &&& {
    color: black;
  }
`;

const ContactButton = styled.a`
  background-color: ${colors.mainPink};
  color: white;
  padding: 4px 20px;
  height: 40px;
  border-radius: 6px;
  margin: 10px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
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
      <ContactButton href="/contact"> Get In Touch</ContactButton>
    </AboutSlice>
  );
};

export default About;
