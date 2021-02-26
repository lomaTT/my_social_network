import { NavLink } from 'react-router-dom'
import settings from './ContactList.module.css'

const ContactList = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={settings.message_from}><NavLink to={path}>{props.contact}</NavLink></div>
    );
};

export default ContactList;