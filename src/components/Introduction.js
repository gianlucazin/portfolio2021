import ButtonLaunch from './ButtonLaunch';

const Introduction = ({ projectData }) => {
  const general = projectData.general;
  const overview = projectData.overview;

  return (
    <div className="introduction u-max-width-big">
      <h1 className="heading-primary u-center-text">{general.title}.</h1>
      <ButtonLaunch />
      <h2 className="heading-secondary">Overview.</h2>
      <p className="paragraph">{overview.overview}</p>
      <div className="introduction__info">
        <div className="introduction__col-1">
          <div className="introduction__item">
            <div className="introduction__title">
              <ion-icon name="person-outline"></ion-icon>
              <p className="paragraph">My Role</p>
            </div>
            <p className="paragraph">{overview.role}</p>
          </div>
          <div className="introduction__item">
            <div className="introduction__title">
              <ion-icon name="laptop-outline"></ion-icon>
              <p className="paragraph">Technologies Used</p>
            </div>
            <p className="paragraph">{overview.technologies}</p>
          </div>
          <div className="introduction__item">
            <div className="introduction__title">
              <ion-icon name="leaf-outline"></ion-icon>
              <p className="paragraph">Notable Features</p>
            </div>
            <p className="paragraph">{overview.features}</p>
          </div>
        </div>
        <div className="introduction__col-2">
          <div className="introduction__item">
            <div className="introduction__title">
              <ion-icon name="trending-up-outline"></ion-icon>
              <p className="paragraph">Project Difficulties</p>
            </div>
            <p className="paragraph">{overview.difficulties}</p>
          </div>
          <div className="introduction__item">
            <div className="introduction__title">
              <ion-icon name="flash-outline"></ion-icon>
              <p className="paragraph">My Solution</p>
            </div>
            <p className="paragraph">{overview.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
