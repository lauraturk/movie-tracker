import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
// import PropTypes from 'prop-types';


const Movie = ({ movieData, favProp, history, favoriteClass }) => {

  const addClass = () => {
    console.log(movieData, favoriteClass)
    return favoriteClass.indexOf(movieData) !== -1 ? 'movie-card favorite' : 'movie-card';
  }

  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w300${movieData.poster_path})`,
    backgroundSize: 'cover'
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
    <div className={addClass()} style={backgroundStyle}>
      <BackSide />
      <FavoriteContainer  favMovie={movieData}
                          favsProp={ favProp }
                          history={history}/>
    </div>
  )

}

export default Movie
