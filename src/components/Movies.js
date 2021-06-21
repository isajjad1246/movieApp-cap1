import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

/*class MovieDisplay extends React.Component{
    state={
        movie.Data{}
    }
}*/

function Movies(props) {
    return(
        <div>
            {props.movies && props.movies.map(movie => {
                return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title >Title: {movie.Title}</Card.Title>
                        <Card.Text>
                            <small>Released Date: {movie.Year}</small>
                        </Card.Text>
                        <Card.Text>
                            <small>ImdbID: {movie.imdbID}</small>
                        </Card.Text>
                        
                        
                    </Card.Body>
                </Card>)
            })}
        </div>
    )
}

export default Movies;