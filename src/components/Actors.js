import React from "react";
import { actors } from "../data";

function Actors() {
  

  const listOfActors = actors.map((eachActor) => {
   return  <div key={eachActor.name}>
      <div>{eachActor.name}</div>
      <ul>{eachActor.movies.map((eachMovie) => {
       return <li key={eachMovie}>{eachMovie}</li>
      })}</ul>
   </div>
  })
  
  return <div>{listOfActors}</div>;
}

export default Actors;
