import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Intro from '../components/Intro';
import Mission from '../components/Mission';
import Projects from '../components/Projects';
import Competencies from '../components/Competencies';
import About from '../components/About';

gsap.registerPlugin(ScrollTrigger);

const HomePg = ({ data }) => {
  let containerHor = useRef();
  let mission = useRef();
  let waves = useRef();

  useEffect(() => {
    const tl1 = gsap
      .timeline()
      .to(containerHor.current, { ease: 'none', duration: 2 })
      .to(containerHor.current, {
        x: () => -window.innerWidth,
        ease: 'power2.in',
        duration: 2,
      })
      .set('.header', { mixBlendMode: 'difference' }, '<')
      .to(containerHor.current, { ease: 'none', duration: 4 });

    ScrollTrigger.create({
      trigger: containerHor.current,
      id: 'trigger1',
      pin: true,
      animation: tl1,
      scrub: 1,
      start: 'top top',
      end: () => containerHor.current.offsetWidth / 3,
    });

    const tl2 = gsap
      .timeline()
      .to('.scroll', { opacity: 0, y: 200, opacity: 0, duration: 0.5 })
      .to(
        mission.current,
        {
          y: 500,
          x: 100,
          opacity: 0,
          ease: 'power1.in',
        },
        0
      );

    ScrollTrigger.create({
      trigger: waves.current,
      id: 'trigger2',
      animation: tl2,
      scrub: true,
      end: 'top center',
      markers: true,
    });

    return () => {
      // Kill the triggers
      tl1.kill(true);
      tl2.kill(true);
      ScrollTrigger.getById('trigger1').kill(true);
      ScrollTrigger.getById('trigger2').kill(true);
    };
  }, []);

  return (
    <div>
      <div ref={containerHor} className="containerHor">
        <Intro />
        <Mission mission={mission} />
      </div>
      <Projects data={data} waves={waves} />
      <About />
      <Competencies />
    </div>
  );
};

export default HomePg;
