import settings from './Posts.module.css';
import NewPost from './NewPost/NewPost.js';
import Post from './Post/Post.js';

const Posts = (props) => {


  let postsElements = props.posts.map(post => <Post message={post.message} amount_of_likes={post.amount_of_likes} />)

  return (
    <div className={settings.posts}>
      <NewPost dispatch={props.dispatch} />
      {postsElements}
    </div>
  );
};

export default Posts;