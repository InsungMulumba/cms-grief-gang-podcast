import React, { Component, FC } from "react";
import styled from "styled-components";
import { TitleH2 } from "styles/headings";
import SocialMediaLinks from '../../components/Home/SocialMediaBar';
import colors from "../../styles/colors";
import ButtonBase from "components/Navigation/ButtonBase";

const AboutSlice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
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
  text-align: center;
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
