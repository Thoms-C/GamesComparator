import React from "react";
import {
  Background,
  Platform,
  PlatformUl,
  PlatformLi,
} from "../../styled-components/HeaderStyle";
import Navs from './Nav'
import Main from '../body/Main'


export default function Header() {
  return (
    <>
    <Background>
      <Navs/>
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
    <Main/>
    </>
  );
}
