import settings from './../Messages.module.css';


const Message = (props) => {
  return (
    <div className={settings.message}>{props.message}</div>
  );
}

export default Message;