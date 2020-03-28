import movies from './moviesReducer';
import movieDetails from './movieDetailsReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    movies,
    movieDetails,
});

export default reducer;
