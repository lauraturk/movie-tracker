import { connect } from 'react-redux';
import { toggleFav } from '../actions/index.js';
import MovieGrid from '../components/MovieGrid';

  const mapStateToProps = (state) => {
    return { movies : state.movies}
  }

  // const mapDispatchToProps = (dispatch) => {
  //   handleFavorite: (id) => {
  //     dispatch(toggleFav(id))
  //   }
  // }

export default connect(mapStateToProps, null)(MovieGrid)
