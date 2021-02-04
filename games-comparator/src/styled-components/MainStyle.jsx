import styled from "styled-components";

export const Background = styled.div`
  background-color: #c4c4c4;
`;

export const FlexGames = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  height: 49vh;
  background-color: #fff;
  margin: 0 7vw;
`;

export const FlexFamousGames = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  width: 30vw;
  background-color: white;
  margin: 2vh 1vw;
  box-shadow: 0px 0px 6px gray;
  border-radius:5px;
  padding-bottom:1vh;

  h2{
    font-size:23px;
    font-weight:bold;
    margin: 1vh 0.5vw;
  }
`;

export const FlexFamousContent = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:auto;
    border-bottom:1px solid lightgray;
    margin:0 1vw;

`

export const FlexBestGames = styled.div`
display: flex;
flex-direction: column;
height: 45vh;
width: 30vw;
background-color: white;
margin: 2vh 0vw;
box-shadow: 0px 0px 6px gray;
border-radius:5px;
padding-bottom:1vh;

h2{
  font-size:23px;
  font-weight:bold;
  margin: 1vh 0.5vw;
}
`

export const FlexBestContent = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  height:auto;
  border-bottom:1px solid lightgray;
  margin:0 1vw;
`

export const FlexSoonGames = styled.div`
display: flex;
flex-direction: column;
height: 45vh;
width: 30vw;
background-color: white;
margin: 2vh 1vw;
box-shadow: 0px 0px 6px gray;
border-radius:5px;
padding-bottom:1vh;

h2{
  font-size:23px;
  font-weight:bold;
  margin: 1vh 0.5vw;
}
`

export const FlexSoonContent = styled.div`
display:flex;
flex-direction:row;
align-items:center;
height:auto;
border-bottom:1px solid lightgray;
margin:0 1vw;
`

export const Between = styled.div`
  display:flex;
  flex-direction:row;
  height:18vh;
  background-color: #000814;
  margin: 0 7vw;
  color:#fff;
  align-items:center;
  justify-content:center;

  p {
    margin: 0 2vw;
  }
`

export const Img = styled.img`
  height:18vh;
  width:45vw;
`

export const Cards = styled.div`
background: #fff;
height:1vh;
`

export const CardsContainer = styled.div`
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
`

export const Cardsitems = styled.li`
    margin-bottom: 24px;
`

export const GamesImg = styled.img`
  height:51.5px;
  width:8vw;
`
