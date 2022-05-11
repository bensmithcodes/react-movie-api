import React from "react";

const MovieList= (props) => {
const FavoriteComponents = props.favoriteComponent;
    return(
        <>
        {props.movies.map((movie,index)=>(
        <div className='image-container d-flex justify-content-start m-3'>
            <div className="overlay d-flex align-items-center justify-content">


            </div>
            <img src= {movie.Poster}alt="movie"></img>
            
        </div>
        ))    
    }
        
        
        </>
    )
}; export default MovieList;