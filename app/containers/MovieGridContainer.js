import { connect } from 'react-redux';
import MovieGrid from '../components/MovieGrid';

  const mapStateToProps = (state, { favoriteProp }) => {
    let movies = favoriteProp ? state.favorites : state.movies;

    return {
      movieList : movies,
      favoriteArr: state.favorites
    }
  }

  // const mapDispatchToProps = (dispatch) => {
  //   handleFavorite: (id) => {
  //     dispatch(toggleFav(id))
  //   }
  // }

export default connect(mapStateToProps, null)(MovieGrid)
