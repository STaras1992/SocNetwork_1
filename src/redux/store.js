import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sideBarReducer from "./SideBarReducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likes: 1},
                {id: 2, message: 'Hey', likes: 3},
                {id: 3, message: 'Huy', likes: 0},
                {id: 4, message: 'Hay', likes: 1},
                {id: 5, message: 'Hiy', likes: 3},
                {id: 6, message: 'Hoy', likes: 2},
            ],
            newPostText: 'new post:'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Masha'},
                {id: 6, name: 'Dasha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hey'},
                {id: 3, message: 'Huy'},
                {id: 4, message: 'Hay'},
                {id: 5, message: 'Hiy'},
                {id: 6, message: 'Hoy'},
            ],

            newMessageText: ''
        },

        sideBarPage: {}
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this.render = observer;
    },

    render() {
        console.log('rendering');
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.messagesPage,action);
        this._state.sideBarPage = sideBarReducer(this._state.sideBarPage,action);

        this.render();
    }

}

export default store;