const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
    dialogs: [
        { id: 1, contact: "Dima" },
        { id: 2, contact: "Taras" },
        { id: 3, contact: "Anton" },
        { id: 4, contact: "Someone else" },
        { id: 5, contact: "More someone" },
        { id: 6, contact: "Who?" },
        { id: 7, contact: "Nobody" },
        { id: 8, contact: "Me" }
    ],

    messages: [
        { id: 1, message: "Hello! How are you?" },
        { id: 2, message: "Whats your name?" }
    ],
    newMessageText: ''

};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return ({
        type: SEND_MESSAGE
    })
}

export const changeNewMessageActionCreator = (text) => {
    return ({
        type: CHANGE_NEW_MESSAGE_TEXT,
        body: text
    })
}

export default messageReducer;