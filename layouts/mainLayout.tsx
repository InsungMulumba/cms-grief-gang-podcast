import React, { FC } from "react";
import { fetchEntries } from "../utils/contentfulPosts";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  posts?: any;
};

const Canvas = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Layout: FC<LayoutProps> = ({ children, posts }) => {
  return (
    <>
      <Head>
        <title>The Grief Gang</title>
        <link rel="icon" href="/logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
