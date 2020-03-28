import { State as MovieState } from './moviesReducer';
import { State as MovieDetailsState } from './movieDetailsReducer';

export default interface AppState {
    readonly movies: MovieState;
    readonly movieDetails: MovieDetailsState;
}
