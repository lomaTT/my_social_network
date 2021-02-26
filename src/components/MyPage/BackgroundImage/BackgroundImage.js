import settings from './BackgroundImage.module.css'

const BackgroundImage = () => {
  return (
    <div className={settings.profile_photo}>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300" alt="main-pic" />
    </div>
  );
};

export default BackgroundImage;