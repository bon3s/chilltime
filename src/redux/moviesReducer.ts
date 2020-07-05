import { ADD_MOVIES, ADD_GENRES, SET_PAGE } from './moviesActions';
import { AnyAction } from 'redux';
import { MovieType } from '../types/MovieType';
import { GenreType } from '../types/GenreType';

export interface State {
    page: number;
    movies: MovieType[];
    genres: GenreType[];
}

const initState: State = {
    page: 1,
    movies: [],
    genres: [],
};

const moviesReducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case SET_PAGE:
            return { ...state, page: action.value };

        case ADD_MOVIES:
            return {
                ...state,
                movies: Array.from(new Set([...state.movies, ...action.value])),
            };

        case ADD_GENRES:
            return { ...state, genres: action.value };

        default:
            return state;
    }
};

export default moviesReducer;
