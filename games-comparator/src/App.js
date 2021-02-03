import React from "react";
import Header from "./components/header/Header";
import Main from "./components/body/Main";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Main />
    </>
  );
}

export default App;
