import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [showMovies, setShowMovies] = useState(false);
    
    function SubmitManage(e) {
        e.preventDefault();
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query);
            const apiUrl = `https://www.omdbapi.com/?apikey=82852d8b&s=${searchParam}&r=json`;
            //console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json();
            //console.log(response.Search);
            setMovies(response.Search);
        }
        fetchMyAPI();
        setShowMovies(true);
        setQuery("");
    }

    return(
        <div className="movieinfo">
            <form onSubmit={SubmitManage}>
                <label htmlFor="queryInput">Search for Movie/Show:</label>
                <input 
                    id="queryInput" 
                    value={query} 
                    type="text"
                    placeholder="Search for movie or show..."
                    onChange={e => setQuery(e.target.value)}/>
                <button className="search-button">Submit</button>
            </form>
            {showMovies ? <Movies movies={movies}></Movies> : <></>}
        </div>
    )
}

export default MovieInfo;