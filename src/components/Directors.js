import React from "react";
import { directors } from "../data";

function Directors() {
  
  
  const directorsList = directors.map((eachDirector) => {
   return ( <div key={eachDirector.name}>
      <div>{eachDirector.name}</div>
      <ul>{eachDirector.movies.map((eachMovie) => {
       return <li key={eachMovie}>{eachMovie}</li>
      })}</ul>
    
    
    </div>
   )
  })
  
  return <div>Direcotors Page {directorsList}</div>;
}

export default Directors;
