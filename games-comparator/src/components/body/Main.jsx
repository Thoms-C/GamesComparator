import React, {useEffect, useState} from "react";
import {
  FlexGames,
  Background,
  FlexFamousGames,
  FlexFamousContent,
  FlexBestGames,
  FlexSoonGames
} from "../../styled-components/MainStyle";
import axios from 'axios';

export default function Main() {
    const [games, setGames] = useState([]);

    useEffect(()=>{
        axios.get("https://rawg-video-games-database.p.rapidapi.com/games")
        .then(function (response){
           console.log(setGames(response.data))
        })
        .catch(function (error) {})
    }, [])

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
    </Background>
  );
}
