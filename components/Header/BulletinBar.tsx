import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import { useState, FC } from "react";

const fadeIn = keyframes`
    0% {

opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
`;

const BulletinText = styled.div`
  animation: ${fadeIn} 1s ease-out 0s both;
`;

const BulletinBar = styled.a`
  height: 40px;
  color: black;
  width: 100%;
  display: flex;
  background-color: #f2d7d1;
  font-family: " Spartan", sans-serif;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  top: 0;
`;

const AnnounceBar: FC = () => {
  return (
    <BulletinBar
      href="https://open.spotify.com/show/6RfXRi5ZaYtFcMBTPju8tL"
      target="_blank"
      id="homepage-top"
    >
      <BulletinText>
        Click here to listen to the most recent episode.
      </BulletinText>
    </BulletinBar>
  );
};
export default AnnounceBar;
