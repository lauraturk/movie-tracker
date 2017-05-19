import React from 'react'

export const FavoriteButton = ({handleFavAdd, handleFavRemove, userId, favMovie}) => {
  // console.log(handleFavAdd, handleFavRemove, userId, favMovie)

  const handleClick = (e) => {
    e.target.classList.toggle('favorite')
    if(!e.target.className.indexOf('favorite')){
      console.log('Im your favorite? ')
      handleFavAdd(userId, favMovie)
    } else {
      console.log('no longer your fav');
      handleFavRemove(userId, favMovie)
    }
    // console.log(e.target.className)

  }

  return (
    <button onClick={(e) => {handleClick(e)}}>Favorite!</button>
  )
}


{/* <object type="image/svg+xml" alt="heart data" data="./images/heart-svg.svg">favorites button</object> */}
