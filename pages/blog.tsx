import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import styled from "styled-components";
import colors from "../styles/colors";
import PageWithLayoutType from "../types/pageWithLayout";

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
    <Root>
      <h1>Blog Page Coming Soon!</h1>
    </Root>
  );
};

(Blog as PageWithLayoutType).layout = MainLayout;

export default Blog;