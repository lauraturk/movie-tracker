import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index.js';
import App from '../components/app';

const mapStateToProps = (state) => {
  console.log(state)
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchApi: (response) => {
      dispatch(fetchMovies(response))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
