import settings from './BestFriends.module.css'
import BestFriend from './BestFriend/BestFriend.js';




const BestFriends = (props) => {
    
    let BestFriendsElements = props.bestFriends.map(Friend => <BestFriend name={Friend.name} />);
    return (
        <div className={settings.bestFriends}> {/* menu best friends */}
            {BestFriendsElements}
        </div>
    );
};

export default BestFriends;