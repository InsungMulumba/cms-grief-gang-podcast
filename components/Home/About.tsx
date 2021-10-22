import React, { Component, FC } from "react";
import styled from "styled-components";
import { TitleH2 as TitleH2Base, SliceContent } from "styles/headings";
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
  background-color: ${colors.cream};
  @media (min-width: 1280px) {
    padding: 20px 20%;
  }
`;

const Content = styled(SliceContent)`
  &&& {
    color:  ${colors.secondary};
    @media (min-width: 1280px) {
      text-align: left;
    }
  }
`;

const TitleH2 = styled(TitleH2Base)`
&&& {
  color: ${colors.secondary};
  @media (min-width: 1280px) {
      text-align: left;
      width: 100%;
    }
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
  return (
    <AboutSlice>
      <TitleH2>I'm Amber</TitleH2>
      <Content>{data} </Content>
    </AboutSlice>
  );
};

export default About;
