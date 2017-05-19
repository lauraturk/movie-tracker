import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
// import PropTypes from 'prop-types';

const Movie = ({ movieData, favProp }) => {
  // console.log(cardData);
  const imgURL = 'https://image.tmdb.org/t/p/w300';

  return (
    <div >
      <h3>Title: { movieData.title }</h3>
      <h3>Release Date: { movieData.release_date }</h3>
      <img src={`${imgURL}${movieData.poster_path}`}/>
      <FavoriteContainer  favMovie={movieData}
                          favsProp={ favProp }/>
    </div>
  )

}

// Movie.propTypes = {
//   cardData: PropTypes.object,
// }

export default Movie
