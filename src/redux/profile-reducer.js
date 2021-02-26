const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

let initialState =  {

    posts: [
        { id: 1, amount_of_likes: 5, message: "Hello! This is my 4 post!" },
        { id: 2, amount_of_likes: 1, message: "Hello! This is my 3 post!" },
        { id: 3, amount_of_likes: 7, message: "Hello! This is my 2 post!" },
        { id: 4, amount_of_likes: 3, message: "Hello! This is my 1 post!" }
    ],
    newPostText: ''

};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                amount_of_likes: 0,
                message: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    } 
}

export const addPostActionCreator = () => {
    return ({
        type: ADD_POST
    })
}

export const changeNewPostActionCreator = (text) => {
    return ({
        type: CHANGE_POST_TEXT,
        newText: text
    })
}

export default profileReducer;