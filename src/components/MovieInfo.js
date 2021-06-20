import React, { useState } from 'react';
import './MovieInfo.css';
import Movie from './Movie';


function MovieInfo() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);

  function SubmitManage(e) { 
    e.preventDefault();
    console.log(e);
      async function fetchAPI(){
        const searchParam = encodeURIComponent(query);
        const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&r=json`;
        //console.log(apiUrl);
        let response = await fetch(apiUrl);
        console.log(apiUrl);
        response = await response.json();
        console.log(response);
        console.log(response.Search);
        setMovies(response.Search);


      }
      fetchAPI();
      setShowMovies(true);
      setQuery("");
  }

  return (
    <div className="movie-info">
      <form onSubmit={SubmitManage}>
        <label htmlFor="queryInput"> Search Movie Here </label>
        <input id="queryInput"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        ></input>
       <button className="search-bar">Submit</button>
      </form>
      {showMovies ? <Movie movies={movies}></Movie> : <></>}

    </div>
  );
}
export default MovieInfo;
