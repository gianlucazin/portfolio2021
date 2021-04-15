import React, { useState, useEffect, useRef } from 'react';
import { gsap, Back } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactGA from 'react-ga';

import Navigation from '../layout/Navigation';
import Burger from '../components/Burger';
import Header from '../layout/Header';
import Intro from '../components/Intro';
import Mission from '../components/Mission';
import Projects from '../components/Projects';
import Competencies from '../components/Competencies';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../layout/Footer';

gsap.registerPlugin(ScrollTrigger);

const HomePg = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuTl = useRef();
  let containerHor = useRef();
  let missionRef = useRef();
  let waves = useRef();
  let tl1 = useRef();
  let tl2 = useRef();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    // To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
      // .to(mission.current, { ease: 'none', duration: 2 })
      .to('.mission .scroll', { opacity: 0, y: 200, duration: 0.2 }, 0)
      .to(
        missionRef.current,
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

  useEffect(() => {
    // Open menu animation
    menuTl.current = gsap
      .timeline({
        defaults: { duration: 1.5, ease: Back.easeOut.config(2) },
        paused: true,
        reversed: true,
      })
      .to('.navigation__overlay', { autoAlpha: 1 })
      .to('.navigation__nav', { x: '10rem' }, 0)
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

  return (
    <div className="homePg">
      <Burger menuOpen={menuOpen} onClickMenuHandler={onClickMenuHandler} />
      <Navigation menuOpen={menuOpen} onClickMenuHandler={onClickMenuHandler} />
      <Header />
      <main>
        <div ref={containerHor} className="containerHor">
          <Intro />
          <Mission missionRef={missionRef} />
        </div>
        <Projects data={data} waves={waves} />
        <About />
        <Competencies />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default HomePg;
