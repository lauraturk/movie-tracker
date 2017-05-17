import { connect } from 'react-redux';
import { toggleFav } from '../actions/index.js';
import CardGrid from '../components/CardGrid';

  const mapStateToProps = (state) => {
    return { cards : state.movies}
  }

  const mapDispatchToProps = (dispatch) => {
    handleFavorite: (id) => {
      dispatch(toggleFav(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid)
