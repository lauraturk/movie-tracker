import React from 'react';
import { FavoritesButton } from './FavoritesButton';
// import PropTypes from 'prop-types';

const Movie = ({ movieData }) => {
  // console.log(cardData);
  const imgURL = 'https://image.tmdb.org/t/p/w300';



  return (
    <div >
      <h3>Title: { movieData.title }</h3>
      <h3>Release Date: { movieData.release_date }</h3>
      <img src={`${imgURL}${movieData.poster_path}`}/>
      <FavoritesButton />
    </div>
  )

}

// Movie.propTypes = {
//   cardData: PropTypes.object,
// }

export default Movie
