import React, {useState} from 'react';
import './MovieInfo.css'

function MovieInfo() {

  const[query, setQuery]=useState("");
    return (
      <div className="movie-info">
        <form>
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
