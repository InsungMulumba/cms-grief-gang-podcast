import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import { useState, FC } from "react";

const SlideIn = keyframes`
    0% {

opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
`;

const BulletinText = styled.div`
  animation: ${SlideIn} 1s ease-out 0s both;
`;

const BulletinBar = styled.div`
  height: 40px;
  color: black;
  width: 100%;
  display: flex;
  background-color: #f2d7d1;
  font-family: "Noto Sans", sans-serif;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 767px) {
    display: none;
  } */
`;

const AnnounceBar: FC = () => {
  return (
    <BulletinBar id="homepage-top">
      {" "}
      <BulletinText>
        {" "}
        Click here to listen to the most recent episode.
      </BulletinText>
    </BulletinBar>
  );
};
export default AnnounceBar;
