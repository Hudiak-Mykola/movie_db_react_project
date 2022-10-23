import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../services";
import {MoviesCard} from "../moviesCard/MoviesCard";
import css from './HomePage.module.css'


export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    const [query, setQuery] = useSearchParams({page: 1});
    const [searched, setSearched] = useState('')


    useEffect(() => {
        movieService.getAllMovie(query.get('page')).then(({data}) => {
            setMovies(data.results);
        })
    }, [query])


    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))

    }

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    useEffect(() => {
        movieService.getGenres().then(({data}) => {
            setGenres([...data.genres]);
        })
    }, [])

    const getMoviesByGenre = (id) => {
        movieService.getMoviesByGenre(id).then(({data}) => {
            setMovies([...data.results]);
        })
    }


    useEffect(() => {
        movieService.getSearch(searched)
            .then(({data}) => {
                setMovies(data.results)
            })
    }, [searched])

    const onChange = (e) => {
        const inputValue = e.target.value
        setSearched(inputValue)
    }

    return (
        <div className={css.wrapWholePage}>
            <div className={css.InputMain}>
                <input className={css.Input} type="text" placeholder={'search film'} onChange={onChange}/>
            </div>
            <div className={css.btnGenres}>
                {genres.map(genre =>
                    <button className={css.GenresButton} key={genre.id} onClick={() => getMoviesByGenre(genre.id)}>
                        {genre.name}
                    </button>)}
            </div>
            <div className={css.HomePage}>
                <div className={css.ListOfMovies}>
                    {movies.map(moviesCard => <MoviesCard key={moviesCard.id} moviesCard={moviesCard}/>)}
                </div>
            </div>
            <div>
                <div className={css.ButtonsPrewNext}>
                    <button className={css.ButtonPrew} onClick={prevPage}>prev</button>
                    <h3>{query.toString().slice(5)}</h3>
                    <button className={css.ButtonNext} onClick={nextPage}>next</button>
                </div>
            </div>
        </div>
    );
};


