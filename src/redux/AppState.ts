import { State as ContactState } from './moviesReducer';

export default interface AppState {
    readonly contacts: ContactState;
}
