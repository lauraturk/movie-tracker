import React from 'react';
// import PropTypes from 'prop-types';
import Card from './Card.js';


const CardGrid = (props) => {
  let { cards, handleFavorite } = props

  const cardGridArr = cards.map( (cardObj, i) =>{
    return <Card className='card'
                 cardData={ cardObj }
                 key={i}
               />
  })

  return(
    <div id='card-grid-container'>{ cardGridArr }</div>
  )


// Card.propTypes = {
//   cardArr: PropTypes.array,
}

export default CardGrid
