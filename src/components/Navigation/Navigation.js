import settings from './Navigation.module.css'
import { NavLink } from 'react-router-dom';
import BestFriends from './BestFriends/BestFriends';

const Navigation = (props) => {
  return (
    <div className={settings.menu}>
    <nav className={settings.nav}>
      <div className={settings.item}>
        <NavLink to="/mypage" activeClassName={settings.activeLink}>My page</NavLink>
      </div>
      <div className={settings.item}>
        <NavLink to="/messages" activeClassName={settings.activeLink}>Messages</NavLink>
      </div>
      <div className={settings.item}>
        <a href="#s">Feed</a>
      </div>
      <div className={settings.item}>
        <a href="#s">Settings</a>
      </div>
    </nav>
    <BestFriends bestFriends={props.bestFriends}/>
    </div>
  );
};

export default Navigation;