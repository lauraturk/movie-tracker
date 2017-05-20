import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
// import PropTypes from 'prop-types';


const Movie = ({ movieData, favProp }) => {
  // console.log(cardData);
  const imgURL = '';
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w300${movieData.poster_path})`,
    backgroundSize: 'cover'
  }

  const FrontSide = () => {
    return (
      <div className='front-side' style={backgroundStyle}></div>
    )
  }

  const BackSide = () => {
    return (
      <div className='back-side'>
        <h3 className='movie-title'>{ movieData.title }</h3>
        <p className='release'>{ movieData.release_date }</p>
        <p className='overview'>{ movieData.overview } </p>
      </div>
    )
  }


  return (
    <div className='movie-card'>
      <FrontSide />
      <BackSide />
      <FavoriteContainer  favMovie={movieData}
                          favsProp={ favProp }/>
    </div>
  )

}



// Movie.propTypes = {
//   cardData: PropTypes.object,
// }

export default Movie
