import movies from './moviesReducer';
import movieDetails from './movieDetailsReducer';
import error from './errorReducer';
import loading from './loadingReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    movies,
    movieDetails,
    error,
    loading,
});

export default reducer;
