import {useEffect, useState} from "react";
import React from "react";

import {movieService} from "../../services";
import css from './MovieDetails.module.css'


export const MovieDetails = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const movie_id = urlParams.get('movie_id')
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        movieService.getMovieDetails(movie_id).then(({data}) => {
            setMovieDetails({...data});
        })
    }, [movie_id])


    return (
        <div className={css.WrapMovieDetails}>
            <div className={css.MainMovieDetails}>
                <h1 className={css.Title}>{movieDetails.title}</h1>
                <div className={css.ImgShortInfo}>
                    <div>
                        <img className={css.Img} src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
                             alt={movieDetails.title}/>
                    </div>
                    <div className={css.ShortInfo}>
                        <p className={css.P}>Original language: <b>{movieDetails.original_language}</b></p>
                        <p>Title: <b>{movieDetails.title}</b></p>
                        <p>Releaze date:<b>{movieDetails.release_date}</b></p>
                        <p>Status: <b>{movieDetails.status}</b></p>
                        <p>Budget: <b>{movieDetails.budget}</b></p>
                        <p>Runtime: <b>{movieDetails.runtime}хв</b></p>
                        <p>Revenue: <b>{movieDetails.revenue}$</b></p>
                    </div>
                </div>
                <div className={css.Overview}>
                    <h2>Overview</h2>
                    <div className={css.Overview}>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

