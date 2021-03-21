import logo from './../img/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <a href="./#projects" className="footer__link">
            Projects
          </a>
        </li>
        <li className="footer__item">
          <a href="./#competencies" className="footer__link">
            Competencies
          </a>
        </li>

        <li className="footer__logo">
          <a href="./" className="footer__link">
            <img src={logo} alt="logo Gianluca Zin" className="footer__img" />
          </a>
          <p className="footer__copyright">© Copyright 2021</p>
        </li>
        <li className="footer__item">
          <a href="./#about" className="footer__link">
            About
          </a>
        </li>
        <li className="footer__item">
          <a href="#contact" className="footer__link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
