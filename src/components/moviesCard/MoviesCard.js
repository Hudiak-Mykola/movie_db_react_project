import React from 'react';
import {NavLink} from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";

import ccs from './MovieCard.module.css'

export const MoviesCard = ({moviesCard}) => {

    const {title, poster_path, id, vote_average} = moviesCard;

    const Star = {
        size: 15,
        count: 10,
        isHalf: true,
        value: vote_average,
        color: "black",
        activeColor: "#e1a356",
    };

    return (
        <div>
            <div className={ccs.MainMovieCard}>
                <NavLink to={`movie_details?movie_id=${id}`}>
                    <div>
                        <img className={ccs.MovieImg} src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                             alt={title}/>
                    </div>
                </NavLink>
                <ReactStars {...Star}/>
                <p className={ccs.MainMovieTitle}> {title}</p>
            </div>
        </div>
    );
};

