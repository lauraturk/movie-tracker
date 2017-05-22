import React from 'react';
import Movie from './Movie.js';


const MovieGrid = (props) => {
  let { movieList, handleFavorite, favoriteProp, history, favoriteArr } = props

  const movieGridArr = movieList.map( (movieObj, i) =>{
    return <Movie movieData={ movieObj }
                  favProp={ favoriteProp }
                  key={i}
                  history={history}
                  favoriteList={favoriteArr}
            />
  })

  return(
    <div id='movie-grid-container'>{ movieGridArr }</div>
  )

}

export default MovieGrid
