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
  let tl1 = useRef();
  let tl2 = useRef();

  useEffect(() => {
    tl1.current = gsap
      .timeline()
      .to(containerHor.current, { ease: 'none', duration: 2 })
      .to(containerHor.current, {
        x: () => -window.innerWidth,
        ease: 'power2.in',
        duration: 2,
      })
      .set(['.header', '.burger'], { mixBlendMode: 'difference' }, '<')
      .to(containerHor.current, { ease: 'none', duration: 4 });

    ScrollTrigger.create({
      trigger: containerHor.current,
      id: 'trigger1',
      pin: true,
      animation: tl1.current,
      scrub: 1,
      start: 'top top',
      end: () => containerHor.current.offsetWidth / 3,
    });

    tl2.current = gsap
      .timeline()
      .to('.scroll', { opacity: 0, y: 200, duration: 0.2 })
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
      animation: tl2.current,
      scrub: true,
      end: 'top center',
    });

    return () => {
      // Kill the triggers
      tl1.current.kill(true);
      tl2.current.kill(true);
      ScrollTrigger.getById('trigger1').kill(true);
      ScrollTrigger.getById('trigger2').kill(true);
    };
  }, []);

  return (
    <main>
      <div ref={containerHor} className="containerHor">
        <Intro />
        <Mission mission={mission} />
      </div>
      <Projects data={data} waves={waves} />
      <About />
      <Competencies />
    </main>
  );
};

export default HomePg;
