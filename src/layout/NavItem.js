import { useRef, useEffect } from 'react';
import { gsap, Back } from 'gsap';

import { HashLink } from 'react-router-hash-link';
// import Link from '../components/Link';
import braket from './../img/braket.svg';

const NavItem = ({ link }) => {
  let hoverTween = useRef();
  let itemRef = useRef();
  let bracketLeftRef = useRef();
  let bracketRightRef = useRef();

  useEffect(() => {
    hoverTween.current = gsap.to(
      [bracketLeftRef.current, bracketRightRef.current],
      {
        x: 0,
        opacity: 1,
        rotationY: '0',
        ease: Back.easeOut.config(2),
        duration: 1,
        paused: true,
      }
    );
  }, []);

  // const onClickHandler = (e) => {
  //   e.preventDefault();
  //   const target = e.target.getAttribute('href');
  //   gsap.to(window, { scrollTo: target, duration: 1 });
  // };

  const onMouseEnterHandler = () => hoverTween.current.play();
  const onMouseLeaveHandler = () => hoverTween.current.reverse();

  return (
    <li
      ref={itemRef}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className="navigation__item"
    >
      <img
        ref={bracketLeftRef}
        src={braket}
        alt="braket"
        className="navigation__braket"
      />
      {/* <a onClick={onClickHandler} href={link.url} className="navigation__link">
        {link.label}
      </a> */}

      <HashLink to={link.url} className="navigation__link">
        {link.label}
      </HashLink>

      <img
        src={braket}
        ref={bracketRightRef}
        alt="braket"
        className="navigation__braket navigation__braket--right"
      />
    </li>
  );
};

export default NavItem;
