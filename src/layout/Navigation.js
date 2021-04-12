import NavItem from './NavItem';
import { links } from '../data/data';

const Navigation = ({ menuOpen, onClickMenuHandler }) => {
  const renderedList = links.map((link, i) => {
    return <NavItem closemenu={onClickMenuHandler} key={i} link={link} />;
  });

  return (
    <div className="navigation">
      <div onClick={onClickMenuHandler} className="navigation__overlay"></div>
      <nav className={`navigation__nav ${menuOpen ? 'open' : ''}`}>
        <ul className="navigation__list">{renderedList}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
