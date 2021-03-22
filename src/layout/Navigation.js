import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap, Back, Expo, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import braket from './../img/braket.svg';

gsap.registerPlugin(ScrollTrigger);

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
  const [openMenuAnim] = useState(
    gsap.timeline({
      defaults: { duration: 1.5, ease: Back.easeOut.config(2) },
      paused: true,
      reversed: true,
    })
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs
  let nav = useRef();

  // Items
  let items = useRef([]);
  items.current = links.map(
    (ref, index) => (items.current[index] = React.createRef())
  );

  // Brakets
  let braketsLeft = useRef([]);
  braketsLeft.current = links.map(
    (ref, index) => (braketsLeft.current[index] = React.createRef())
  );

  let braketsRight = useRef([]);
  braketsRight.current = links.map(
    (ref, index) => (braketsRight.current[index] = React.createRef())
  );

  // Open menu animation
  useEffect(() => {
    openMenuAnim.to(nav.current, { x: '10rem', visibility: 'visible' });
    links.map((link, index) => {
      openMenuAnim.to(
        items.current[index].current,
        { opacity: 1, x: '0', delay: 0.1 },
        '-=1.5'
      );
    });
  }, [openMenuAnim]);

  // Hover animation menu
  useEffect(() => {
    links.map((link, index) => {
      const hoverLeft = gsap.timeline({
        defaults: { duration: 1, ease: Back.easeOut.config(2) },
        paused: true,
      });
      const hoverRight = gsap.timeline({
        defaults: { duration: 1, ease: Back.easeOut.config(2) },
        paused: true,
      });

      hoverLeft.to(braketsLeft.current[index].current, {
        x: 0,
        opacity: 1,
        rotationY: '0',
      });
      hoverRight.to(braketsRight.current[index].current, {
        x: 0,
        opacity: 1,
        rotationY: '0',
      });

      const hoverPlay = () => {
        hoverLeft.play();
        hoverRight.play();
      };
      const hoverReverse = () => {
        hoverLeft.reverse();
        hoverRight.reverse();
      };

      items.current[index].current.addEventListener('mouseenter', hoverPlay);
      items.current[index].current.addEventListener('mouseleave', hoverReverse);
    });

    return () => {
      links.map((link, index) => {
        const hoverPlay = () => {};
        const hoverReverse = () => {};

        items.current[index].current.removeEventListener(
          'mouseenter',
          hoverPlay
        );
        items.current[index].current.removeEventListener(
          'mouseleave',
          hoverReverse
        );
      });
    };
  }, []);

  const openMenu = () => {
    !menuOpen ? openMenuAnim.play() : openMenuAnim.reverse(0.7);
    setMenuOpen(!menuOpen);
  };

  const renderedList = links.map((link, i) => {
    return (
      <li key={i} ref={items.current[i]} className="navigation__item">
        <img
          ref={braketsLeft.current[i]}
          src={braket}
          alt="braket"
          className="navigation__braket"
        />
        <a href={link.url} className="navigation__link">
          {link.label}
        </a>
        <img
          src={braket}
          ref={braketsRight.current[i]}
          alt="braket"
          className="navigation__braket navigation__braket--right"
        />
      </li>
    );
  });

  return (
    <div className="navigation">
      <div
        className={`navigation__plate ${menuOpen ? 'open' : ''}`}
        onClick={openMenu}
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
