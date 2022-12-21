import React from "react";
import { movies } from "../data";

function Movies() {

    const movieList = movies.map((eachMovie) => {
    return ( <div key={eachMovie.title}>
        <div>{eachMovie.title}</div>
        <div>{eachMovie.time}</div>
        <ul>{eachMovie.genres.map((eachGenre) => {
            return <li key={eachGenre}>{eachGenre}</li>
        })}</ul>

    </div> )
    
    })




  return <div><h1>{movieList}</h1></div>;
}

export default Movies;
