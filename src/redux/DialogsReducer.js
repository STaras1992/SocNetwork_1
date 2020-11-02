const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

let initState = {
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
};

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = action.message;

            return {
                ...state,
                messages: [...state.messages, {id: 6, message: message}],
            }

        default:
            return state;
    }

}

export const addNewMessageCreator = (message) => ({type: ADD_MESSAGE,message:message})

export default dialogsReducer;