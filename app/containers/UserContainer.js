import { connect } from 'react-redux';
import { signInUser } from '../actions/index.js';
import UserSignIn from '../components/UserSignIn.js';

  const mapStateToProps = (state) => {
    return { userId : state.user}
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      handleSignIn: (userId) => {
        dispatch(signInUser(userId))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserSignIn)
