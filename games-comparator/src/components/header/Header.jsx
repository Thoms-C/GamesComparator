import React from "react";
import {
  Background,
  FlexNaviUL,
  FlexNav,
  Nav,
  Connection,
  Logo,
  SubNavBar,
  SubContain,
  SearchBar,
  Platform,
  PlatformUl,
  PlatformLi,
} from "../../styled-components/HeaderStyle";

export default function Header() {
  return (
    <Background>
      <Nav>
        <FlexNav>
          <Logo>LOGO</Logo>
          <div>
            <FlexNaviUL>
              <li>Games</li>
              <li>Pre-paid cards</li>
              <li>Softwares</li>
            </FlexNaviUL>
          </div>
          <Connection>
            <p>Sign up / Sign in</p>
          </Connection>
        </FlexNav>
        <SubNavBar>
          <SubContain>
            <p>Accueil</p>
            <p>DarkMod</p>
          </SubContain>
        </SubNavBar>
        <SearchBar>
          <p>Search for your games.........</p>
          <i class="fas fa-search"></i>
        </SearchBar>
      </Nav>
      <Platform>
        <PlatformUl>
          <PlatformLi>PC</PlatformLi>
          <PlatformLi>PS4</PlatformLi>
          <PlatformLi>PS5</PlatformLi>
          <PlatformLi>XBOX ONE</PlatformLi>
          <PlatformLi>XBOX SERIES X</PlatformLi>
          <PlatformLi>SWITCH</PlatformLi>
        </PlatformUl>
      </Platform>
    </Background>
  );
}
