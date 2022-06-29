import styled from "styled-components";
import { FC, useEffect } from "react";
import Media from "./Media";
import Carousel from "./Carousel";

const Root = styled.div`
  display: flex;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
const MiscSlice: FC = () => {
  return (
    <Root>
      <Carousel />
      <Media />
    </Root>
  );
};
export default MiscSlice;
