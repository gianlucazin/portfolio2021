const Header = () => {
  return (
    <div className="header">
      <ul className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/gianlucas90"
          className="social__link"
        >
          <ion-icon name="logo-github" className="social__icon"></ion-icon>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCFEbTaaI0L1zaQZCK2H2G2Q"
          className="social__link"
        >
          <ion-icon name="logo-youtube" className="social__icon"></ion-icon>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/gianlucazin/"
          className="social__link"
        >
          <ion-icon name="logo-linkedin" className="social__icon"></ion-icon>
        </a>
        <a href="mailto: gianlucazin1990@gmail.com" className="social__link">
          <ion-icon name="mail" className="social__icon"></ion-icon>
        </a>
      </ul>
    </div>
  );
};

export default Header;
