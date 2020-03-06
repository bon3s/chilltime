import { ADD_MOVIES } from './moviesActions';
import { AnyAction } from 'redux';

export interface State {
    movies: any[];
}

const initState: State = {
    movies: [],
};

const moviesReducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case ADD_MOVIES:
            return { ...state, contacts: [...state.movies, action.value] };

        default:
            return state;
    }
};

export default moviesReducer;
