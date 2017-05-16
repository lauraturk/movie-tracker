import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardData }) => {

  console.log(cardData)
  const imgURL = 'https://image.tmdb.org/t/p/w500'

  return (
    <div>
      <h3>Title: { cardData.original_title }</h3>
      <h3>Release Date: { cardData.release_date }</h3>
      <img src={`${imgURL}${cardData.poster_path}`}/>
    </div>
  )

}

Card.propTypes = {
  cardData: PropTypes.object,
}

export default Card
