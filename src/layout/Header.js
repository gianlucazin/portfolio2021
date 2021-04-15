import ReactGA from 'react-ga';

const Header = () => {
  const clickHandler = (e) => {
    ReactGA.event({
      category: 'Button click',
      action: 'clicked: ' + e.target.parentElement.getAttribute('id'),
    });
  };

  return (
    <div className="header">
      <ul className="social">
        <a
          id="github"
          onClick={clickHandler}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/gianlucas90"
          className="social__link"
        >
          <ion-icon name="logo-github" className="social__icon"></ion-icon>
        </a>

        <a
          id="youtube"
          onClick={clickHandler}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCFEbTaaI0L1zaQZCK2H2G2Q"
          className="social__link"
        >
          <ion-icon name="logo-youtube" className="social__icon"></ion-icon>
        </a>

        <a
          id="linkedin"
          onClick={clickHandler}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/gianlucazin/"
          className="social__link"
        >
          <ion-icon name="logo-linkedin" className="social__icon"></ion-icon>
        </a>
        <a
          id="email"
          onClick={clickHandler}
          href="mailto: gianlucazin1990@gmail.com"
          className="social__link"
        >
          <ion-icon name="mail" className="social__icon"></ion-icon>
        </a>
      </ul>
    </div>
  );
};

export default Header;
