import settings from './Messages.module.css';
import ContactList from './ContactList/ContactList.js';
import Message from './Message/Message.js';
import React from 'react';
import { sendMessageActionCreator, changeNewMessageActionCreator } from '../../redux/message-reducer.js';

const Messages = (props) => {


  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator())
    
  }

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(changeNewMessageActionCreator(body))
  }

  
  let dialogsElements = props.state.DialogsPage.dialogs.map(dialogs => <ContactList contact={dialogs.contact} id={dialogs.id} />)
  let messagesElements = props.state.DialogsPage.messages.map(message => <Message message={message.message} />)
  let newMessageText = props.state.DialogsPage.newMessageText;

  return (
    <div className={settings.messages_content}>
      <div className={settings.messages_from}>
        {dialogsElements}
      </div>
      <div className={settings.messages}>
        <textarea value={newMessageText} onChange={onNewMessageChange}></textarea>
        <br></br>
        <button className={settings.button} onClick={onSendMessageClick}>Send message.</button>
        {messagesElements}
      </div>
    </div>
  );
};

export default Messages;