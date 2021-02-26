import settings from './Description.module.css'

const Description = () => {
    return (
        <div className={settings.info}>
            <div className={settings.photo}>
                <img src="https://lorimcnee.com/wp-content/uploads/2010/05/avatar.jpg" alt="profile main"/>
            </div>
            <div className={settings.description}>
                <div className={settings.item}>
                    Name:
                </div>
                <div className={settings.item}>
                    Surname:
                </div>
                <div className={settings.item}>
                    Date of birth:
                </div>
                <div className={settings.item}>
                    Work:
                </div>
            </div>
        </div>
    );
};

export default Description;