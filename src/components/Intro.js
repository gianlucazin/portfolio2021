import logo from './../img/logo.svg';
import Scroll from './Scroll';

const Intro = () => {
  return (
    <div className="intro">
      <img src={logo} alt="Gianluca Zin logo" className="intro__logo" />
      <h1 className="heading-primary">Gianluca Zin</h1>
      <p className="paragraph">Fullstack Developer & UI/UX Designer</p>
      <div className="intro__nav">
        <a href="" className="intro__link heading-tertiary">
          About
        </a>
        <b className="intro__dividers">/</b>
        <a href="" className="intro__link heading-tertiary">
          Projects
        </a>
        <b className="intro__dividers">/</b>
        <a href="" className="intro__link heading-tertiary">
          Contact
        </a>
      </div>
      <Scroll />
    </div>
  );
};

export default Intro;
