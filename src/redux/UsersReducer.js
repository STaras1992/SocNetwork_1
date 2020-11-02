import {followingUserAPI, userAPI} from "../api/api";
import updateObjectInArray from "../utils/objectHelpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_FETCHING = 'users/SET_FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'users/SET_FOLLOWING_IN_PROGRESS';

let initState = {
    users: [],
    pageSize: 100,
    totalUsers: 10,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id',{followed:true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id',{followed:false})
                // users: state.users.map((user) => {
                //     return (user.id === action.userId ? {...user, followed: false} : user)
                // })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followUser = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowUser = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsers = (total) => ({type: SET_TOTAL_USERS, totalUsers: total});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching: isFetching});
export const setFollowingInProgress = (isFetching, userId) => ({
    type: SET_FOLLOWING_IN_PROGRESS,
    isFetching: isFetching,
    userId
});

export const getUsersRequest = (currentPage, pageSize) => async (dispatch) => {

    dispatch(setFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize);

    dispatch(setFetching(false));
    dispatch(setTotalUsers(data.totalCount));
    dispatch(setUsers(data.items));
}

export const follow = (userId) => (dispatch) => {
    let apiMethod = followingUserAPI.followUserRequest.bind(userAPI);
    let actionCreator = followUser;
    followUnfolow(dispatch,userId,apiMethod,actionCreator);
}

export const unFollow = (userId) => (dispatch) => {
    let apiMethod = followingUserAPI.unFollowUserRequest.bind(userAPI);
    let actionCreator = unFollowUser;
    followUnfolow(dispatch,userId,apiMethod,actionCreator);
}

export const followUnfolow = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(setFollowingInProgress(true, userId));

    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator);
    }

    dispatch(setFollowingInProgress(false));
}


export default UsersReducer;

