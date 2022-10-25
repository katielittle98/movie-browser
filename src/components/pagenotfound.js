import React from "react";
import Hero from "./hero";
import "./404.css"
import { Link } from 'react-router-dom'



const PageNotFound = () => {
    return (
        <div>
            <Hero text="404: Page not found"/>
            <p className="text-center text-danger">The page you were looking for does not exist or an error occured.</p>
            <img className="width-img" src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" alt="sad-face"  />
            <Link className="nav-link active home-link" aria-current="page" to="/"> Return to Home</Link>
            
        </div>
    )
} 


export default PageNotFound;

