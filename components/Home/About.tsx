import React, { Component, FC } from "react";
import styled from "styled-components";
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
      <Title>About</Title>
      <Content>{data} </Content>
    </AboutSlice>
  );
};

export default About;
