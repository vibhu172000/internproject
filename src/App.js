import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import React from 'react'
import Fourthcomponent from "./Components/Fourthcomponent";
import Fifthcomponent from "./Components/Fifthcomponent";
import Thirdcomponent from "./Components/ThirdComp.js/Thirdcomponent";
import Secondcomponent from "./Components/SecondComp/Secondcomponent";
import Firstcomponent from "./Components/FirstComp/Firstcomponent";
function App() {
  return (
    <div className="App">
        <Firstcomponent/>
        <Secondcomponent/>
        <Thirdcomponent/>
        <Fifthcomponent/>
        <Fourthcomponent/>

    </div>
  );
}

export default App;
