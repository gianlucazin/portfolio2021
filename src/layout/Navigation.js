import React, { useState, useRef, useEffect } from 'react';
import { gsap, Back } from 'gsap';

import NavItem from './NavItem';
import { links } from '../data/links';

const Navigation = () => {
  // States
  const [menuOpen, setMenuOpen] = useState(false);
  // Refs
  let nav = useRef();
  let menuTl = useRef();

  useEffect(() => {
    // Open menu animation
    menuTl.current = gsap
      .timeline({
        defaults: { duration: 1.5, ease: Back.easeOut.config(2) },
        paused: true,
        reversed: true,
      })
      .to(nav.current, { x: '10rem' })
      .to(
        '.navigation__item',
        { opacity: 1, x: '0', delay: 0.1, stagger: 0.1 },
        0
      );
  }, []);

  const onClickMenuHandler = () => {
    !menuOpen ? menuTl.current.play() : menuTl.current.reverse(0.7);
    setMenuOpen(!menuOpen);
  };

  const renderedList = links.map((link, i) => {
    return <NavItem key={i} link={link} />;
  });

  return (
    <div className="navigation">
      <div className="menu-icon" onClick={onClickMenuHandler}>
        <input className="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav ref={nav} className={`navigation__nav ${menuOpen ? 'open' : ''}`}>
        <ul className="navigation__list">{renderedList}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
