import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '../layout/Header';
import Intro from '../components/Intro';
import Mission from '../components/Mission';
import Projects from '../components/Projects';
import Competencies from '../components/Competencies';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../layout/Footer';

gsap.registerPlugin(ScrollTrigger);

const HomePg = ({ projectsData }) => {
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
      .to(containerHor.current, { ease: 'none', duration: 4 });

    ScrollTrigger.create({
      trigger: containerHor.current,
      pin: true,
      animation: tl1,
      scrub: 1,
      start: 'top top',
      end: () => containerHor.current.offsetWidth / 3,
    });

    const tl2 = gsap.timeline().to(mission.current, {
      y: 500,
      x: 100,
      opacity: 0,
      ease: 'power1.in',
    });

    ScrollTrigger.create({
      trigger: waves.current,
      animation: tl2,
      scrub: true,
      end: 'top center',
      markers: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <div ref={containerHor} className="containerHor">
        <Intro />
        <Mission mission={mission} />
      </div>
      <Projects projectsData={projectsData} waves={waves} />
      <About />
      <Competencies />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default HomePg;
