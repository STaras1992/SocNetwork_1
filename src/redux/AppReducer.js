import React from 'react';
import {auth} from "./AuthReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

const initState = {
    isInitialized: false
}

const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state;
    }
}

export const initSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => async (dispatch) => {
    // let promise = dispatch(auth());
    // promise.then(() => {dispatch(initSuccess())});
    await dispatch(auth());
    dispatch(initSuccess());
}

export default AppReducer;