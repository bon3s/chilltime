import { AnyAction } from 'redux';
import { SET_ERROR } from './errorActions';

export interface State {
    errorEvent: boolean;
}
const initState: State = {
    errorEvent: false,
};

const errorReducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, errorEvent: !state.errorEvent };
        default:
            return state;
    }
};

export default errorReducer;
