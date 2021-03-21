import React, { useState, useRef, useEffect } from 'react';
import { gsap, Back, Expo, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [tl] = useState(
    gsap.timeline({
      defaults: { duration: 1.5, ease: Back.easeOut.config(2) },
      paused: true,
      reversed: true,
    })
  );
  const [menuOpen, setMenuOpen] = useState(false);

  let navigationBtn = useRef();
  let nav = useRef();
  let item1 = useRef();
  let item2 = useRef();
  let item3 = useRef();
  let item4 = useRef();

  useEffect(() => {
    const items = [item1.current, item2.current, item3.current, item4.current];
    tl.to(nav.current, { x: '10rem', visibility: 'visible' }).to(
      items,
      { opacity: 1, x: '0', stagger: 0.1 },
      '-=1.5'
    );
  }, [tl]);

  const openMenu = () => {
    !menuOpen ? tl.play() : tl.reverse(0.7);
    setMenuOpen(!menuOpen);
  };

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
        <ul className="navigation__list">
          <li ref={item1} className="navigation__item">
            <a href="./#projects" className="navigation__link">
              Projects
            </a>
          </li>
          <li ref={item2} className="navigation__item">
            <a href="./#competencies" className="navigation__link">
              Competencies
            </a>
          </li>
          <li ref={item3} className="navigation__item">
            <a href="./#about" className="navigation__link">
              About
            </a>
          </li>
          <li ref={item4} className="navigation__item">
            <a href="./#contact" id="user-page" className="navigation__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
