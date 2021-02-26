import { combineReducers, createStore } from "redux";
import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: messageReducer,
    NavPage: navbarReducer
});

let store = createStore(reducers);

export default store;