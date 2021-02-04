import React, {useEffect, useState} from 'react'
import Navs from '../header/Nav'
import {Background,TitleListGames,FlexGames,Title, FlexListGames,FlexPlatforms} from '../../styled-components/GameStyle'
import axios from 'axios'

export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(()=>{
      axios
      .get("https://api.rawg.io/api/platforms?key=")
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
        <>
        <Background>
        <Navs/>
        </Background>
        <FlexGames>
            <FlexListGames>
                <Title>Game catalog</Title>
                <h2>Filter by platform:</h2>
                <FlexPlatforms>
                    {games
                    .filter((game, i)=>(i < 6))
                    .map((game)=> (
                        <div>{game.name}</div>
                    ))}
                </FlexPlatforms>
                    <TitleListGames>
                        <li>Name :</li>
                        <li>METACRITIC :</li>
                        <li>PRICE :</li>
                    </TitleListGames>
            </FlexListGames>
            <div>
                <h1>HELLO world</h1>
            </div>
        </FlexGames>
        </>
    )
}