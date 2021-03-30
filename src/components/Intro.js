import { HashLink } from 'react-router-hash-link';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import logo from './../img/logo.svg';
import Scroll from './Scroll';

gsap.registerPlugin(ScrollToPlugin);

const Intro = () => {
  // const onClickHandler = (e) => {
  //   e.preventDefault();
  //   const target = e.target.getAttribute('href');
  //   gsap.to(window, { scrollTo: target, duration: 1 });
  // };

  return (
    <section className="intro">
      <img src={logo} alt="Gianluca Zin logo" className="intro__logo" />
      <h1 className="heading-primary">Gianluca Zin</h1>
      <p className="paragraph">Fullstack Developer & UI/UX Designer</p>
      <div className="intro__nav">
        <HashLink
          // onClick={onClickHandler}
          to="#about"
          className="intro__link heading-tertiary"
        >
          About
        </HashLink>
        <b className="intro__dividers">/</b>
        <HashLink
          // onClick={onClickHandler}
          to="#projects"
          className="intro__link heading-tertiary"
        >
          Projects
        </HashLink>
        <b className="intro__dividers">/</b>
        <HashLink
          // onClick={onClickHandler}
          to="#contact"
          className="intro__link heading-tertiary"
        >
          Contact
        </HashLink>
      </div>
      <Scroll />
    </section>
  );
};

export default Intro;
