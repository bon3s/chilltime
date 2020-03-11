import { MovieType } from '../types/MovieType';
import { GenreType } from '../types/GenreType';

export const SET_PAGE = 'SET_PAGE';
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_GENRES = 'ADD_GENRES';

export const setPage = (value: number) => ({
    type: SET_PAGE,
    value,
});

export const addMovies = (value: MovieType[]) => ({
    type: ADD_MOVIES,
    value,
});

export const addGenres = (value: GenreType[]) => ({
    type: ADD_GENRES,
    value,
});
