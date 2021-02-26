import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer  from "./navbar-reducer";

let store = {
    _state: {
        DialogsPage: {
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

        },
        ProfilePage: {

            posts: [
                { id: 1, amount_of_likes: 5, message: "Hello! This is my 4 post!" },
                { id: 2, amount_of_likes: 1, message: "Hello! This is my 3 post!" },
                { id: 3, amount_of_likes: 7, message: "Hello! This is my 2 post!" },
                { id: 4, amount_of_likes: 3, message: "Hello! This is my 1 post!" }
            ],
            newPostText: ''

        },
        NavPage: {
            bestFriends: [
                { id: 1, name: "Alex" },
                { id: 2, name: "Peter" },
                { id: 3, name: "Andrew" }
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._reRenderPage = observer;
    },
    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = messageReducer(this._state.DialogsPage, action);
        this._state.NavPage     = navbarReducer(this._state.NavPage, action); 
        this._reRenderPage();
    }
};





export default store;