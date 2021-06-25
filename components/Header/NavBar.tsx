import styled, { keyframes } from "styled-components";
import { useState, FC } from "react";

const NavigationBarDesktop = styled.div`
  height: 100px;
  @media (max-width: 1200px) {
    height: 80px;
  }

  width: 100%;
  display: flex;
  background-color: purple;
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

const NavBar: FC = () => {

    return (
        <NavigationBarDesktop />
    )
};
 export default NavBar;
