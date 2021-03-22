import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="header">
      <ul className="social">
        <a href="https://github.com/gianlucas90" className="social__link">
          <ion-icon name="logo-github" className="social__icon"></ion-icon>
        </a>

        <a href="https://github.com/gianlucas90" className="social__link">
          <ion-icon name="logo-youtube" className="social__icon"></ion-icon>
        </a>

        <a
          href="https://www.linkedin.com/in/gianlucazin/"
          className="social__link"
        >
          <ion-icon name="logo-linkedin" className="social__icon"></ion-icon>
        </a>
      </ul>
      <Navigation />
    </div>
  );
};

export default Header;