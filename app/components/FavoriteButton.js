import React from 'react'

export const FavoriteButton = (props) => {
  let {handleFavAdd, handleFavRemove, userId, favMovie, favsProp} = props

  const handleClick = (e) => {
    e.target.classList.toggle('favorite')
    let fav = !e.target.className.indexOf('favorite') ? true : false;

    fav ? handleFavAdd(userId, favMovie) : handleFavRemove(userId, favMovie);
  }

  const addClass = () => {
    return favsProp ? 'active' : '';
  }

  return (
    <button className={ addClass() }
            onClick={(e) => {handleClick(e)}}>
      Favorite!
    </button>
  )
}


{/* <object type="image/svg+xml" alt="heart data" data="./images/heart-svg.svg">favorites button</object> */}
