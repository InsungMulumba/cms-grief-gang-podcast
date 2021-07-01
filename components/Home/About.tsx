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
`;

const Title = styled.h2`
 font-family: "Noto Sans", sans-serif;
`;

const Content = styled.p`
 font-family: "Noto Sans", sans-serif;
`;


const About: FC = () => {

    return (
        <AboutSlice>  
            <Title>About</Title>
            <Content>Sentences about Amber, why she started the grief gang podcast, other general stuff about her </Content>
        </AboutSlice>
    )
};

export default About;