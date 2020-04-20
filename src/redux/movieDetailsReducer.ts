import { AnyAction } from 'redux';
import { SET_DETAILS, RESET_DETAILS } from './movieDetailsActions';
import { DetailsType } from '../types/DetailsType';

export interface State {
    movieDetails: DetailsType;
}
const initState = {
    movieDetails: {
        id: 0,
        imdb: '',
        title: '',
        language: '',
        releaseDate: '',
        backdropPath: '',
        posterPath: '',
        voteAvg: 0,
        overview: '',
        tagline: '',
        genres: [{ id: 0, name: '' }],
    },
};

const movieDetailsReducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case SET_DETAILS:
            return { ...state, movieDetails: action.value };

        case RESET_DETAILS:
            return { ...state, movieDetails: initState.movieDetails };

        default:
            return state;
    }
};

export default movieDetailsReducer;
