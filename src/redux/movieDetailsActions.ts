export const SET_DETAILS = 'SET_DETAILS';
export const RESET_DETAILS = 'RESET_DETAILS';

export const setDetails = (value: any) => ({
    type: SET_DETAILS,
    value,
});

export const resetDetails = () => ({
    type: RESET_DETAILS,
});
