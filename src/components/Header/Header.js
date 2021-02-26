import settings from './Header.module.css'

const Header = () => {
  return (
    <header className={settings.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png" alt="logo" />
    </header>
  );
};

export default Header;