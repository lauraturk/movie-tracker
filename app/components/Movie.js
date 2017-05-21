import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
// import PropTypes from 'prop-types';


const Movie = ({ movieData, favProp, history }) => {

  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w300${movieData.poster_path})`,
    backgroundSize: 'cover'
  }

  const backgroundTransparent = {
    backgroundColor: 'red',
    // opacity: .25%
  }

  const FrontSide = () => {
    return (
      <div className='front-side card-side'></div>
    )
  }

  const BackSide = () => {
    return (
      <div className='back-side card-side'>
        <h3 className='movie-title'>{ movieData.title }</h3>
        <p className='release'>{ movieData.release_date }</p>
        <p className='overview'>{ movieData.overview } </p>
        <FavoriteContainer  favMovie={movieData}
                            favsProp={ favProp }
                            history={history}/>
      </div>
    )
  }


  return (
    <div className='movie-card' style={backgroundStyle}>
      <BackSide />
      <FavoriteContainer  favMovie={movieData}
                          favsProp={ favProp }
                          history={history}/>
    </div>
  )

}



// Movie.propTypes = {
//   cardData: PropTypes.object,
// }

export default Movie
