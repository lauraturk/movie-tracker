import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';


const CardGrid = ( { cardArr } ) => {
  if (!cardArr.length) {
    return <div></div>
  }

  const cardGridArr = cardArr.map( (cardObj, i) =>{
    return <Card className='card'
                 cardData={ cardObj }
                 key={i}
               />
  })

  return(
    <div id='card-grid-container'>{ cardGridArr }</div>
  )

}

Card.propTypes = {
  cardArr: PropTypes.array,
}

export default CardGrid
