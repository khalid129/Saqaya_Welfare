import * as ActionTypes from './ActionTypes';

export const Masjids = (state = { isLoading: true,
    errMess: null,
    masjids:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MASJIDS:
            return {...state, isLoading: false, errMess: null, masjids: action.payload};

        case ActionTypes.MASJIDS_LOADING:
            return {...state, isLoading: true, errMess: null, masjids: []}

        case ActionTypes.MASJIDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};