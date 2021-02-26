import settings from './Post.module.css'

const Post = (props) => {
  return (
    <div className={settings.post}>
      <div className={settings.photo}>
        <img src="https://lorimcnee.com/wp-content/uploads/2010/05/avatar.jpg" alt="profile main"/>
        <div className={settings.likes}>Likes: {props.amount_of_likes}</div>
      </div>
      <div className={settings.post_content}>{props.message}</div>
    </div>
  );
};

export default Post;