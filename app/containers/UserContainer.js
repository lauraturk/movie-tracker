import { connect } from 'react-redux';
import { signInUser, addInitialFavs } from '../actions/index.js';
import UserSignIn from '../components/UserSignIn.js';

  const mapStateToProps = (state) => {
    return { userId : state.user}
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      handleSignIn: (userId) => {
        dispatch(signInUser(userId))
      },
      loadUserFavorites: (initialFavsArray) => {
        dispatch(addInitialFavs(initialFavsArray))
      }
    }

  }

export default connect(mapStateToProps, mapDispatchToProps)(UserSignIn)
