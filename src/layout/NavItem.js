import { useRef, useEffect } from 'react';
import { gsap, Back } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import braket from './../img/braket.svg';
gsap.registerPlugin(ScrollToPlugin);

const NavItem = ({ closemenu, link }) => {
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

  const onClickHandler = (e) => {
    e.preventDefault();
    closemenu();
    gsap.to(window, {
      ease: 'linear',
      scrollTo: {
        y: e.target.hash,
        autoKill: true,
      },
    });
  };

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
      <a href={link.url} className="navigation__link" onClick={onClickHandler}>
        {link.label}
      </a>

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
