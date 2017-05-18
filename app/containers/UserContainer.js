import { connect } from 'react-redux';
import { signInUser } from '../actions/index.js';
import UserSignIn from '../components/UserSignIn.js';

  const mapStateToProps = (state) => {
    // console.log(state)
    if(!state.user){
      alert('you piece of poop, sign in!')
    } else {
      return { userId : state.user}
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      handleSignIn: (userId) => {
        dispatch(signInUser(userId))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserSignIn)
