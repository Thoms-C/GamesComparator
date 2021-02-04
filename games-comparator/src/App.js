import React from "react";
import Header from "./components/header/Header";
import Main from "./components/body/Main";
import { Reset } from "styled-reset";
import Footer from "./components/Footer/index"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Reset />
    <Header />
    <Main />
    <Footer />
    </Router>
    </>
  );
}

export default App;
