import React, { useState, useRef, useEffect } from 'react';
import { gsap, Back } from 'gsap';

import NavItem from './NavItem';

// Config
const links = [
  {
    label: 'Projects',
    url: './#projects',
  },
  {
    label: 'Competencies',
    url: './#competencies',
  },
  {
    label: 'About',
    url: './#about',
  },
  {
    label: 'Contact',
    url: './#contact',
  },
];

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
      <div
        className={`navigation__plate ${menuOpen ? 'open' : ''}`}
        onClick={onClickMenuHandler}
      >
        <svg
          className="navigation__burger"
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <path
            className="navigation__line navigation__line--1"
            d="M 50,35 H 30"
          />
          <path
            className="navigation__line navigation__line--2"
            d="M 50,35 H 70"
          />
          <path
            className="navigation__line navigation__line--3"
            d="M 50,50 H 30"
          />
          <path
            className="navigation__line navigation__line--4"
            d="M 50,50 H 70"
          />
          <path
            className="navigation__line navigation__line--5"
            d="M 50,65 H 30"
          />
          <path
            className="navigation__line navigation__line--6"
            d="M 50,65 H 70"
          />
        </svg>
        <svg
          className="navigation__x"
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <path className="navigation__line" d="M 34,32 L 66,68" />
          <path className="navigation__line" d="M 66,32 L 34,68" />
        </svg>
      </div>

      <nav ref={nav} className={`navigation__nav ${menuOpen ? 'open' : ''}`}>
        <ul className="navigation__list">{renderedList}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
