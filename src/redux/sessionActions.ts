import { Session } from '../types/SessionIDType';
export const SET_SESSION = 'SET_PAGE';

export const setSession = (value: Session) => ({
    type: SET_SESSION,
    value,
});
