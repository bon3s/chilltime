import { State as MovieState } from './moviesReducer';

export default interface AppState {
    readonly movies: MovieState;
}
