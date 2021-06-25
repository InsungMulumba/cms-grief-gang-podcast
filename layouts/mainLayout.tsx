import React, { FC } from "react";
import { fetchEntries } from "../utils/contentfulPosts";
import Header from "../components/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
  posts?: any;
};

const Layout: FC<LayoutProps> = ({ children, posts }) => {
  return (
    <>
      <Header isMain={true} />
      {posts}
      {children}
    </>
  );
};

export default Layout;
