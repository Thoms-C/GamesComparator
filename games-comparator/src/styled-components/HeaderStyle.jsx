import styled from "styled-components";

export const FlexNav = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2c2c2c;
  height: 85px;
  width: 1240px;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
`;

export const FlexNaviUL = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25vw;
  margin-left: 10vw;
  color: white;
  font-size: 1.3rem;
  gap: 2vw;
`;

export const Background = styled.div`
  background-color: #e4e4e4;
  height: 80vh;
  background-image: url("https://image.api.playstation.com/vulcan/img/rnd/202010/0222/NMwFZ00J50ctQEHdRGGg7IBg.png");
  background-size: cover;
  box-sizing: border-box;
`;

export const Connection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 2vw;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Logo = styled.div`
  height: 100%;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const SubNavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 1240px;
`;

export const SubContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35px;
  margin: 0 2vw 0 2vw;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  height: 30px;
  background-color: white;
  border-radius: 15px;
  margin-top: 30vh;

  p {
    margin-left: 1vw;
  }
  i {
    margin-right: 1vw;
  }
`;

export const Platform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  color: green;
`;

export const PlatformUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-top: 28vh;
`;

export const PlatformLi = styled.li`
  border: 1px solid black;
  background-color: white;
  width: 10vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
