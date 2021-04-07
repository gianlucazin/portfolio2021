import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { links } from '../data/links';
import logo from './../img/logo-light.svg';

const onClickHandler = (e) => {
  e.preventDefault();
  const target = e.target.hash;
  gsap.to(window, { scrollTo: target, duration: 1, autoKill: true });
};

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <a
            onClick={onClickHandler}
            href={links[0].url}
            className="footer__link"
          >
            {links[0].label}
          </a>
        </li>
        <li className="footer__item">
          <a
            onClick={onClickHandler}
            href={links[1].url}
            className="footer__link"
          >
            {links[1].label}
          </a>
        </li>

        <li className="footer__logo">
          <a onClick={onClickHandler} href="./" className="footer__link">
            <img src={logo} alt="logo Gianluca Zin" className="footer__img" />
          </a>
          <p className="footer__copyright">© Copyright 2021</p>
        </li>
        <li className="footer__item">
          <a
            onClick={onClickHandler}
            href={links[2].url}
            className="footer__link"
          >
            {links[2].label}
          </a>
        </li>
        <li className="footer__item">
          <a
            onClick={onClickHandler}
            href={links[3].url}
            className="footer__link"
          >
            {links[3].label}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
