import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
// import PropTypes from 'prop-types';

const Movie = ({ movieData, favProp }) => {
  // console.log(movieData);
  const imgURL = '';
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w300${movieData.poster_path})`,
    backgroundSize: 'cover'
  }

  const hoverStyle = {

  }

  return (
    <div className='movie' style={backgroundStyle}>
      <h3>Title: { movieData.title }</h3>
      <h3>Release Date: { movieData.release_date }</h3>
      <FavoriteContainer  favMovie={movieData}
                          favsProp={ favProp }/>
    </div>
  )

}

// Movie.propTypes = {
//   cardData: PropTypes.object,
// }

export default Movie
