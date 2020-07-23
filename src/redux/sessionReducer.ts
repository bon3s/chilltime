import { AnyAction } from 'redux';

import { Session } from '../types/SessionIDType';
import { SET_SESSION } from './sessionActions';

export interface State {
    session: Session;
}

const initState: State = {
    session: {
        success: false,
        guestSessionID: '',
        expiresAt: '',
    },
};

const sessionReducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case SET_SESSION:
            return { ...state, session: action.value };
        default:
            return state;
    }
};

export default sessionReducer;
