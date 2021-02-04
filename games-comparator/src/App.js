import React from "react";
import Header from "./components/header/Header";
import Main from "./components/body/Main";
import { Reset } from "styled-reset";
import Footer from "./components/Footer/index"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Games from './components/Games/Games'
import Prepaid from './components/Prepaid/Prepaid'
import Softwares from './components/Softwares/Softwares'
import Navs from './components/header/Nav'

function App() {
  return (
    <>
    <Reset />
    <Router>
      <Route path="/" exact component={Header}/>
      <Route path="/Games" exact component={Games}/>
      <Route path="/Prepaid" exact component={Prepaid}/>
      <Route path="/Softwares" exact component={Softwares}/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
