import React from 'react';
import {authAPI, loginAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login},
    isAuth
});

export const auth = () => async (dispatch) => {
    let data = await authAPI.checkAuth();

    if (data.resultCode === 0) {
        dispatch(setUserData(data.data.id, data.data.email, data.data.login, true));
    } else {
        console.log(data.messages);
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await loginAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(auth());
    } else {
        let message;
        if (response.data.messages.length > 0) {
            message = response.data.messages[0];
        } else {
            message = "some error";
        }
        let action = stopSubmit("login", {_error: message});
        dispatch(action)
    }
}

export const logout = () => async (dispatch) => {
    let response = await loginAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    } else {
        console.log(response.data.messages);
    }
}

export default AuthReducer;