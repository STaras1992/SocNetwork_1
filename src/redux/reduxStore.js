import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import AppReducer from "./AppReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage:UsersReducer,
    sideBar: SideBarReducer,
    auth: AuthReducer,
    app:AppReducer,
    form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;