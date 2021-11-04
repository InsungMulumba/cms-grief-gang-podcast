import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import styled from "styled-components";
import colors from "../styles/colors";
import PageWithLayoutType from "../types/pageWithLayout";
import Header from "../components/Header/Header";
import Head from "next/head";

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 50px);
    background-color: ${colors.mainPink};
    color: white;
`;

const Blog: FC = () => {
  return (
    <><Head>
      <title>The Grief Gang | Podcast</title>
      <link rel="icon" href="/logo.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head><Header isMain={true} showBulletin={false} /><Root>
        <h1>Blog Page Coming Soon!</h1>
      </Root></>
  );
};

(Blog as PageWithLayoutType).layout = MainLayout;

export default Blog;