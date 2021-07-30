import React, { FC } from "react";
import { fetchEntries } from "../utils/contentfulPosts";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

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
      {/* <Header isMain={true} /> */}
      {posts}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
