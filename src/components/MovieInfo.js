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
        response = await response.json();
        setMovies(response.Search);


      }
      fetchAPI();
 
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

    </div>
  );
}
export default MovieInfo;
