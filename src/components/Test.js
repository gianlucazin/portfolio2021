import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import './test.scss';
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const panel1 = useRef();
  const panel2 = useRef();

  // useEffect(() => {
  //   let container = document.querySelector('.container-horizontal');

  //   const tl = gsap
  //     .timeline()
  //     .to(container, {
  //       ease: 'none',
  //       duration: 3,
  //     })
  //     .to(container, {
  //       x: () => -window.innerWidth,
  //       ease: 'power4.in',
  //       duration: 1,
  //     })
  //     .to(container, {
  //       ease: 'none',
  //       duration: 3,
  //     });

  //   ScrollTrigger.create({
  //     trigger: container,
  //     pin: true,
  //     animation: tl,
  //     scrub: 1,
  //     start: 'top top',
  //     end: () => container.offsetWidth / 2,
  //   });
  // }, []);

  return (
    <div className="parent">
      {/* <div className="buttons">
        <button style={stylebtn} className="btn">
          1
        </button>
        <button style={stylebtn} className="btn">
          2
        </button>
        <button style={stylebtn} className="btn">
          3
        </button>
      </div> */}
      <div className="container-horizontal">
        <div className="panel pink" ref={panel1}>
          1
        </div>
        <div className="panel blue" ref={panel2}>
          2
        </div>
        <div className="panel orange" ref={panel2}>
          3
        </div>
        <a href="https://github.com/gianlucas90" className="test1">
          <ion-icon name="logo-github" className="test1"></ion-icon>
        </a>
      </div>
      <h3 className="test2 heading-tertiary">Test</h3>

      <div className="panel green">4</div>
    </div>
  );
};

export default Test;
