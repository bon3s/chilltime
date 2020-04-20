import movies from './moviesReducer';
import movieDetails from './movieDetailsReducer';
import error from './errorReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    movies,
    movieDetails,
    error,
});

export default reducer;
