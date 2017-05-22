import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';

const Movie = ({ movieData, favProp, history, favoriteList }) => {

  const addClass = () => {
    let fav = favoriteList.find(movie => movie.movie_id === movieData.movie_id)
    let indicator = fav ? true : false;

    return fav ? 'movie-card favorite-card' : 'movie-card';
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
        <p className='overview'>{ movieData.overview }</p>
      </div>
    )
  }

  return (
    <div className={ addClass() } style={ backgroundStyle }>
      <BackSide />
      <FavoriteContainer  favMovie={ movieData }
                          favsProp={ favProp }
                          history={ history }/>
    </div>
  )

}

export default Movie
