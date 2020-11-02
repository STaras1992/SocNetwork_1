import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const UPDATE_STATUS = 'profile/UPDATE_STATUS';

let initState = {
    posts: [
        {id: 1, message: 'Hi', likes: 1},
        {id: 2, message: 'Hey', likes: 3},
        {id: 3, message: 'Huy', likes: 0},
        {id: 4, message: 'Hay', likes: 1},
        {id: 5, message: 'Hiy', likes: 3},
        {id: 6, message: 'Hoy', likes: 2},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 5,
                message: action.post,
                likes: 0
            };

            return {
                ...state,
                posts: [...state.posts, post],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...action.profile}
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (data) => ({type: SET_USER_PROFILE, profile: data});
export const setStatus = (status) => ({type: SET_USER_STATUS, status});
export const updateStatus = (status) => ({type: UPDATE_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);

    if (response.error == null)
        dispatch(setUserProfile(response.data));
    else
        alert('server error');
}


export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

    if (response.error == null)
        dispatch(setStatus(response.data));
    else
        console.log(response.messages);
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0)
        dispatch(updateStatus(status));
    else
        console.log(response.messages);
}


export default profileReducer;