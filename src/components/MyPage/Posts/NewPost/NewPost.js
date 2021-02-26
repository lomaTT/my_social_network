import settings from './NewPost.module.css'
import React from 'react';
import { changeNewPostActionCreator, addPostActionCreator } from '../../../../redux/profile-reducer.js'


const NewPost = (props) => {
  let newPostRef = React.createRef();

  let addPost = () => {
    props.addPost();
    newPostRef.current.value = '';
  }

  let changeNewPost = () => {
    let text = newPostRef.current.value;
    changeNewPost(text);
    text = '';
  }
  
  
  
  return (
    <div className={settings.item}>
      <textarea className={settings.textarea} ref={newPostRef} value={props.newPostText} onChange={changeNewPost}></textarea>
      <div className={settings.button}><button onClick={addPost}>Post.</button></div>
    </div>
  );
};

export default NewPost;