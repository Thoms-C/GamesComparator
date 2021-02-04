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
    </Background>
  );
}
