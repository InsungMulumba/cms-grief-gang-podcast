import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import { useState, FC } from "react";

const BulletinBarDesktop = styled.div`
  height: 40px;
  color: black;
  width: 100%;
  display: flex;
  background-color: #F2D7D1;
  font-family: "Noto Sans", sans-serif;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

const SlideIn = keyframes`
    0% {
      top: -25px;
      opacity: 0%;
    }

    100% {
      top: 50px;
      opacity: 100%;
    }
`;

const AnnounceBar: FC = () => {
  return (
    <BulletinBarDesktop>
      {" "}
      Click here to listen to the most recent podcast{" "}
    </BulletinBarDesktop>
  );
};
export default AnnounceBar;
