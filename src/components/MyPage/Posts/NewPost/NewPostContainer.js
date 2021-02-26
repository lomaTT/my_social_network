import settings from './NewPost.module.css'
import React from 'react';
import { changeNewPostActionCreator, addPostActionCreator } from '../../../../redux/profile-reducer.js'


const NewPostContainer = (props) => {
  let newPostRef = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let changeNewPost = (text) => {
    let action = changeNewPostActionCreator(text);
    props.dispatch(action);
  }
  
  
  
  return (
    <NewPost changeNewPost={changeNewPost} addPost={addPost} />
  );
};

export default NewPostContainer;