import React from "react";
import { NavLink } from "react-router-dom";
import Movies from "./Movies";

function NavBar() {
  return <div>

           <NavLink to="/">Home</NavLink> 
           <NavLink to="/movies">Movies</NavLink> 
           <NavLink to="/actors">Actors</NavLink>  
           <NavLink to="/directors">Directors</NavLink>

  </div>;
}

export default NavBar;
