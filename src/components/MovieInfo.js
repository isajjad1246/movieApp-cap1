import React, {useState} from 'react';
import './MovieInfo.css'

function MovieInfo() {

  const[query, setQuery]=useState("");
  function SubmitManage(e){
    e.preventDefault();
    const apiURL="http://www.omdbapi.com/?apikey=[process.env.REACT_APP_API_KEY]&s=${searchParam}&r=json`";
  }
    return (
      <div className="movie-info">
        <form onSubmit={SubmitManage}>
          <label htmlFor="queryInput"> Search Movie Here </label>
          <input id="queryInput" 
          type="text" 
          value= {query}
          onChange={e => setQuery(e.target.value)}
          ></input> 
          
        </form>
        <button className="search-bar">Submit</button>
      </div>
    );
} 
export default MovieInfo;
