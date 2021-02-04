import React, {useEffect, useState} from "react";
import {
  FlexGames,
  Background,
  FlexFamousGames,
  FlexFamousContent,
  FlexBestGames,
  FlexSoonGames,
  Between,
  Img,
  GamesImg,
  FlexBestContent,
  FlexSoonContent,
  
} from "../../styled-components/MainStyle";
import axios from 'axios';
import logo from '../assets/images/logo.jpg';
import CardItems from './CardItems'

export default function Main() {
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
    <Background>
      <FlexGames>
        <FlexFamousGames>
          <h2>Famous Games</h2>
          {games
          .filter((game, i)=>(i < 7))
          .map((game) => (
              <FlexFamousContent>
                <GamesImg src={game.background_image}/>
                <div>{game.name}</div>
                <div>{game.rating_top}</div>
              </FlexFamousContent>
          ))}
        </FlexFamousGames>

        <FlexBestGames>
            <h2>Best games</h2>
            {games
            .filter((game, i)=>(i < 7))
            .map((game)=>(
                <FlexBestContent>
                    <GamesImg src={game.background_image}/>
                    <div>{game.name}</div>
                    <div>{game.rating}</div>
                    <div>{game.metacritic}</div>
                </FlexBestContent>
            ))}
        </FlexBestGames>

        <FlexSoonGames>
            <h2>Coming soon</h2>
            {games
            .filter((game, i)=>(i < 7))
            .map((game)=>(
                <FlexSoonContent>
                    <GamesImg src={game.background_image}/>
                    <div>{game.name}</div>
                    <div>{game.released}</div>
                </FlexSoonContent>
            ))}
        </FlexSoonGames>

      </FlexGames>
        <Between>
          <Img src={logo}/>
          <p>Notre site internet vous permet de comparer les prix des jeux vidéo disponibles dans les boutiques de nos partenaires. En utilisant notre comparateur de prix pour jeux vidéo, DLC et cartes prépayées, vous économisez du temps, et de l'argent! Nous vous aidons à trouver les prix les plus bas pour vos jeux préférés et, à votre demande, nous pouvons aussi vous informer lorsque leurs prix changent! Nous proposons ce service pour les jeux PC (Steam, Epic Games ...) et consoles (PS5, Xbox Series X / S, Switch, etc.) afin de vous permettre d'économiser de l'argent quelle que soit votre plateforme. Enfin, vous pouvez consulter notre blog pour vous tenir au courant des dernières actus sur les jeux!</p>
        </Between>
        <div>
          
        </div>
    </Background>
  );
}
