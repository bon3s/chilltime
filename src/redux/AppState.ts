import { State as MovieState } from './moviesReducer';
import { State as MovieDetailsState } from './movieDetailsReducer';
import { State as ErrorState } from './errorReducer';
import { State as LoadingState } from './loadingReducer';
export default interface AppState {
    readonly movies: MovieState;
    readonly movieDetails: MovieDetailsState;
    readonly error: ErrorState;
    readonly loading: LoadingState;
}
