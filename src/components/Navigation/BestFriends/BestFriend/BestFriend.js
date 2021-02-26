import settings from './BestFriend.module.css'

const BestFriend = (props) => {


    return (


        <div className={settings.oneFriend}>
            <img src="https://lorimcnee.com/wp-content/uploads/2010/05/avatar.jpg" alt="profile main" />
          {props.name}
        </div>


    );
};

export default BestFriend;