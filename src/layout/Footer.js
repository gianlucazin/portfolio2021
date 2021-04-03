import logo from './../img/logo.svg';
import { HashLink } from 'react-router-hash-link';
import { links } from '../data/links';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <HashLink to={links[0].url} className="footer__link">
            {links[0].label}
          </HashLink>
        </li>
        <li className="footer__item">
          <HashLink to={links[1].url} className="footer__link">
            {links[1].label}
          </HashLink>
        </li>

        <li className="footer__logo">
          <HashLink to="./" className="footer__link">
            <img src={logo} alt="logo Gianluca Zin" className="footer__img" />
          </HashLink>
          <p className="footer__copyright">© Copyright 2021</p>
        </li>
        <li className="footer__item">
          <HashLink to={links[2].url} className="footer__link">
            {links[2].label}
          </HashLink>
        </li>
        <li className="footer__item">
          <HashLink to={links[3].url} className="footer__link">
            {links[3].label}
          </HashLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
