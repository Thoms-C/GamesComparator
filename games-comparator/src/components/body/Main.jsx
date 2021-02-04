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
  Cards,
  CardsContainer,
  
} from "../../styled-components/MainStyle";
import axios from 'axios';
import logo from '../assets/images/logo.jpg';
import CardItems from './CardItems'

export default function Main() {
    const [games, setGames] = useState([]);

    useEffect(()=>{
      axios
      .get("https://api.rawg.io/api/platforms?key=b1db5b30688c44179077bd2c87f8c0e8")
      .then(({data})=>{
        setGames(data.results)
        console.log(data.results)
      })
      .catch(err=>{
        console.warn("Error")
        console.log(err)
      });
    });

  return (
    <Background>
      <FlexGames>
        <FlexFamousGames>
          <h2>Famous Games</h2>
          {games.map((game) => (
              <FlexFamousContent>
                <div>{game.background_image}</div>
                <div>{game.name}</div>
              </FlexFamousContent>
          ))}
        </FlexFamousGames>

        <FlexBestGames>
            <h2>Best games</h2>
            {games.map((game)=>(
                <div>
                    <div>{game.background_image}</div>
                    <div>{game.name}</div>
                    <div>{game.rating}</div>
                </div>
            ))}
        </FlexBestGames>

        <FlexSoonGames>
            <h2>Coming soon</h2>
            {games.map((game)=>(
                <div>
                    <div>{game.background_image}</div>
                    <div>{game.name}</div>
                    <div>{game.release}</div>
                </div>
            ))}
        </FlexSoonGames>

      </FlexGames>
        <Between>
          <Img src={logo}/>
          <p>Notre site internet vous permet de comparer les prix des jeux vidéo disponibles dans les boutiques de nos partenaires. En utilisant notre comparateur de prix pour jeux vidéo, DLC et cartes prépayées, vous économisez du temps, et de l'argent! Nous vous aidons à trouver les prix les plus bas pour vos jeux préférés et, à votre demande, nous pouvons aussi vous informer lorsque leurs prix changent! Nous proposons ce service pour les jeux PC (Steam, Epic Games ...) et consoles (PS5, Xbox Series X / S, Switch, etc.) afin de vous permettre d'économiser de l'argent quelle que soit votre plateforme. Enfin, vous pouvez consulter notre blog pour vous tenir au courant des dernières actus sur les jeux!</p>
        </Between>
        { <Cards>
          <CardsContainer>
            <ul>
              <CardItems
               src="https://solvers.fr/wp-content/uploads/2019/06/8-astuces-pour-ame%CC%81liorer-les-performances-des-applications-React.png"
               text="React js : Ce que vous avez besoin de savoir avant d'entrer en entreprise "
               path="/"
               label="Développeur Front" />
            </ul>
          </CardsContainer>
        </Cards> }
    </Background>
  );
}
