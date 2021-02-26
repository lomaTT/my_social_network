import settings from './MyPage.module.css'
import BackgroundImage from './BackgroundImage/BackgroundImage.js'
import Description from './Description/Description.js'
import Posts from './Posts/Posts.js'

const MyPage = (props) => {
  return (
    <div className={settings.main_content}>
      <BackgroundImage />
      <Description />
      <Posts posts={props.posts} dispatch={props.dispatch} />
    </div>
  );
};

export default MyPage;