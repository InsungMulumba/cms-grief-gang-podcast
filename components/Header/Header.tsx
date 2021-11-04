import React, { FC } from "react";
import styles from "../../styles/Layout.module.css";
import styled from "styled-components";
import BulletinBar from "./BulletinBar";
import NavBar from "./NavBar";

type HeaderProps = {
  isMain: boolean;
  showBulletin: boolean;
};

const HeaderRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
`;

const Header: FC<HeaderProps> = ({ isMain, showBulletin }) => {
  console.log(isMain);
  return (
    <HeaderRoot id="home">
      {showBulletin && <BulletinBar />}
      <NavBar />
    </HeaderRoot>
  );
};

export default Header;
