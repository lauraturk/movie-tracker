import React from 'react';
// import PropTypes from 'prop-types';
import Movie from './Movie.js';


const MovieGrid = (props) => {
  let { movies, handleFavorite } = props

  const movieGridArr = movies.map( (movieObj, i) =>{
    return <Movie className='movie'
                 movieData={ movieObj }
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
