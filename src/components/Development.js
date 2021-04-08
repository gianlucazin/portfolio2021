import ButtonLaunch from './ButtonLaunch';

const Development = ({ general }) => {
  return (
    <div className="development u-max-width-big">
      <h2 className="heading-secondary">Development.</h2>
      <div className="development__repo">
        {general.private ? (
          <>
            <ion-icon name="lock-closed-outline"></ion-icon>
            <p className="paragraph">Private Repository.</p>
          </>
        ) : (
          <a
            href={general.repository}
            target="_blank"
            rel="noreferrer"
            className="development__btn"
          >
            <ion-icon name="logo-github" />
            Reveal Code
          </a>
        )}
      </div>
      {general.url !== '' ? <ButtonLaunch url={general.url} /> : null}
    </div>
  );
};

export default Development;
