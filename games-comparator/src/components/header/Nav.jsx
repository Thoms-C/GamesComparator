import React, {useState, useEffect} from "react";
import {
  FlexNaviUL,
  FlexNav,
  Nav,
  Connection,
  Logo,
  SubNavBar,
  SubContain,
  SearchBar,
  Links,
  LinkHome
} from "../../styled-components/HeaderStyle";
import logo from '../assets/images/logo.jpg'
import axios from 'axios'
import SearchBar1 from './SearchBar'


export default function Navs({searchValue, setSearchValue}) {
  const [games, setGames] = useState([]);

  useEffect(()=>{
    axios
    .get("https://api.rawg.io/api/games?key=")
    .then(({data})=>{
      setGames(data.results)
      console.log(data.results)
    })
    .catch(err=>{
      console.warn("Error")
      console.log(err)
    });
  }, []);

    return (
        <Nav>
        <FlexNav>
            <Links to="/">
          <Logo><img src={logo}/></Logo>
          </Links>

          <div>
            <FlexNaviUL>

            <Links to="/Games">
              <li>Games</li>
            </Links>

              <Links to="/Prepaid">
              <li>Pre-paid cards</li>
              </Links>

                <Links to="/Softwares">
              <li>Softwares</li>
              </Links>

            </FlexNaviUL>
          </div>
          <Connection>
            <p>Sign up / Sign in</p>
          </Connection>
        </FlexNav>
        <SubNavBar>
          <SubContain>
            <LinkHome to="/">
            <p>Accueil</p>
            </LinkHome>
            <p>Dark Mode</p>
          </SubContain>
        </SubNavBar>
        <SearchBar>
          <SearchBar1/>
          {games
          .filter((game, i)=>{
            if (!game.name) {
              return false
            }
            return game.name.toLowerCase().includes(searchValue);
          })
          .map((game,i)=>{
            return (
              <div>
                <img src={game.background_image}/>
                <h1>{game.name}</h1>
              </div>
            )
          })
          }
          <i class="fas fa-search"></i>
        </SearchBar>
      </Nav>
    )
}