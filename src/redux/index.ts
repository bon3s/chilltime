import movies from './moviesReducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    movies,
});

export default reducer;
