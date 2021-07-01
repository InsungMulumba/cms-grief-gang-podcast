import styled, { keyframes } from "styled-components";
import { useState, FC } from "react";

const NavigationBarDesktop = styled.div`
  height: 150px;
  align-items: center;
  width: 100%;
  display: flex;
  /* background-color: purple; */
  justify-content: space-evenly;
  @media (max-width: 1200px) {
    height: 80px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const NavLinksContainerDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 767px) {
    display: none;
  }
`;

const NavLinksDesktop = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
  margin: auto 50px;
  padding: 0px 10px;
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
`;

const Logo = styled.img`
  height: 60%;
  margin: auto 20px;
`;

const TagLine = styled.div`
  /* background-color: purple; */
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 24px;
  padding: 10px;
`;
const MenuToggle = styled.button`
  height: 100%;
  background-color: inherit;
  margin: auto 10px;
  @media (min-width: 767px) {
    display: none;
  }
  border: none;
`;

const BurgerMenu = styled.div`
  width: 35px;
  height: 2px;
  background-color: black;
  margin: 6px;
`;
const NavBar: FC = () => {
  const [toggleBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <>
      <NavigationBarDesktop>
        <MenuToggle onClick={() => setShowBurgerMenu(!toggleBurgerMenu)}>
          <BurgerMenu />
          <BurgerMenu />
          <BurgerMenu />
        </MenuToggle>
        <NavLinksContainerDesktop>
          <NavLinksDesktop href="/">Home </NavLinksDesktop>
          <NavLinksDesktop href="/about">About </NavLinksDesktop>
        </NavLinksContainerDesktop>
        <Logo
          src="/logo.jpg"
          alt="Grief Gang Podcast logo"
          crossOrigin="anonymous"
        />

        <NavLinksContainerDesktop>
          <NavLinksDesktop href="/libary">Library </NavLinksDesktop>
          <NavLinksDesktop href="/Blog">Blog </NavLinksDesktop>
        </NavLinksContainerDesktop>
      </NavigationBarDesktop>
      <TagLine> The Grief Gang Podcast</TagLine>
    </>
  );
};
export default NavBar;