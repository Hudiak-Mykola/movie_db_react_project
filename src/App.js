import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";

import {Header, HomePage, MovieDetails} from "./components";
import './App.css'

const App = () => {

    //My Theme

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "white") {
            document.body.classList.add("white")
        }
    }, []);

    return (
        <Routes>
            <Route path={'/'} element={<Header/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'home/movie_details'} element={<MovieDetails/>}/>
            </Route>
        </Routes>
    );
};

export default App;