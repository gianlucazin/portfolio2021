import ButtonLaunch from './ButtonLaunch';

const Development = () => {
  return (
    <div className="development u-max-width-big">
      <h2 className="heading-secondary">Development</h2>
      <div className="development__title">
        <ion-icon name="lock-closed-outline"></ion-icon>
        <p className="paragraph">Private Repository.</p>
      </div>
      <ButtonLaunch />
    </div>
  );
};

export default Development;
