import React from "react";
import './styles/App.css'
import Posts from "./Pages/Posts";
import {Route, Routes, Switch} from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import RouterApp from "./Pages/RouterApp";


function App() {
    return (
        <div className={'App'}>
            <Navbar/>
            <RouterApp/>
        </div>
    );
}


export default App;
