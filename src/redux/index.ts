import movies from './moviesReducer';
import movieDetails from './movieDetailsReducer';
import error from './errorReducer';
import loading from './loadingReducer';
import session from './sessionReducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    movies,
    movieDetails,
    error,
    loading,
    session,
});

export default reducer;
