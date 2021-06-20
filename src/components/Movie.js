import React from 'react';
import './Movie.css'
function Movie(props) {
    return (
      <div className="movie">
        <div>
            {props.name}
            this is where the movie will go lolz
        </div>
      </div>
    );
  } 
export default Movie;
