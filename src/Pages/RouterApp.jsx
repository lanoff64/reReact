import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Posts from "./Posts";
import Error from "./Error";


const RouterApp = () => {
    return (
        <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path='/' element={<Posts/>}/>
                <Route path=":slug" element={<Error/>}/>
        </Routes>
    );
};

export default RouterApp;