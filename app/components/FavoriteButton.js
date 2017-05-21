import React from 'react'

export const FavoriteButton = (props) => {
  let {handleFavAdd, handleFavRemove, userId, favMovie, favoriteArr} = props

  let favMovieUpdate;


  const handleClick = (e) => {

    if (!userId.id){
      console.log("USER NOT SIGN IN, do stuff here to fix that");
    }

    e.target.classList.toggle('favorite')
    let fav = e.target.className.baseVal.indexOf('favorite') !== -1 ? true : false;

    (fav) ? handleAdd() : handleDelete()

  }

  const handleAdd = () => {
    console.log('in add section');
    favMovie.user_id = userId.id; //add userId to object for API call
    return fetch('api/users/favorites/new',
      {
        method: 'POST',
        body: JSON.stringify(favMovie),
        headers: { 'Content-Type':'application/json' }
      })
    .then(response => response.json())
    .then(favId => {
      delete favMovie.user_id //remove userId from object- no longer needed
      handleFavAdd(userId, favMovie)
    })
    .catch(error => console.log('add fav movie error: ', error))
  }

  const handleDelete = () => {
    console.log('in delete section');
    fetch(`api/users/${userId.id}/favorites/${favMovie.movie_id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type':'application/json' }
      })
    .then(response => response.json())
    // .then(deleted => console.log("deleted response: ", deleted))
    .then(handleFavRemove(userId, favMovie))
    .catch(error => console.log('delete fav movie error: ', error))
  }

  const addClass = () => {
    return favoriteArr.indexOf(favMovie) !== -1 ? 'favorite' : '';
  }

  return (
  <label >
    <input className="hidden"/>
    <svg  className={ addClass() }
          onClick={(e) => {handleClick(e)}}
          width="44" height="42" viewBox="0 0 44 42" xmlns="http://www.w3.org/2000/svg"><path d="M3.63 18.444l17.808 21.282c.307.367.81.362 1.112 0l17.808-21.282-.71.91c1.048-1.31 1.8-2.89 2.142-4.628.137-.695.21-1.415.21-2.152C42 6.74 37.48 2.008 31.906 2.008c-4.6 0-8.48 3.22-9.696 7.623l-.42-.007C20.572 5.22 16.692 2 12.093 2 6.52 2 2 6.73 2 12.566c0 .737.072 1.456.21 2.15.342 1.738 1.093 3.32 2.142 4.63" stroke="#A40606" strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </label>
  )

}


{/* <object type="image/svg+xml" alt="heart data" data="./images/heart-svg.svg">favorites button</object> */}
