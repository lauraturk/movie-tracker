import React from 'react';
// import PropTypes from 'prop-types';
import Movie from './Movie.js';


const MovieGrid = (props) => {
  let { movieList, handleFavorite, favoriteProp} = props

  const movieGridArr = movieList.map( (movieObj, i) =>{
    return <Movie movieData={ movieObj }
                  favProp={ favoriteProp }
                  key={i}
            />
  })

  return(
    <div id='movie-grid-container'>{ movieGridArr }</div>
  )


// Movie.propTypes = {
//   cardArr: PropTypes.array,
}

export default MovieGrid
