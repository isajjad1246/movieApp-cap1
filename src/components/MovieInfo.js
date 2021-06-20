import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [showMovies, setShowMovies] = useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query);
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&r=json`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json();
            console.log(response.Search);
            setMovies(response.Search);
        }
        fetchMyAPI();
        setShowMovies(true);
        setQuery("");
    }

    return(
        <div className="movieinfo">
            <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">Search Movie Name:</label>
                <input 
                    id="queryInput" 
                    value={query} 
                    type="text"
                    onChange={e => setQuery(e.target.value)}/>
                <button className="search-bar">Submit</button>
            </form>
            {showMovies ? <Movies movies={movies}></Movies> : <></>}
        </div>
    )
}

export default MovieInfo;