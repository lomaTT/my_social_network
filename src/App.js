import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Navigation from './components/Navigation/Navigation.js';
import MyPage from './components/MyPage/MyPage.js';
import Messages from './components/Messages/Messages.js';
import { Route } from 'react-router-dom';


function App(props) {
  return (
    <div className="main-container">
      <Header />
      <Navigation bestFriends={props.state.NavPage.bestFriends} />
      <div className='main_content'>
        <Route render={() => <MyPage state={props.state} posts={props.state.ProfilePage.posts} dispatch={props.dispatch} />} path='/mypage' />
        <Route render={() => <Messages state={props.state} store={props.store} dispatch = {props.dispatch} />} path='/messages' />
      </div>
    </div>
  );
};


export default App;
