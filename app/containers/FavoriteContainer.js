import { connect } from 'react-redux';
import { addFav, removeFav } from '../actions/index.js';
import { FavoriteButton } from '../components/FavoriteButton.js';


  const mapStateToProps = (state) => {
    return {
      userId : state.user,
      favoriteArr: state.favorites
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      handleFavAdd: (userId, movie) => {
        dispatch(addFav(userId, movie))
      },
      handleFavRemove: (userId, movie) => {
        dispatch(removeFav(userId, movie))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton)
