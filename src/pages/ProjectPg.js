import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ReactGA from 'react-ga';

import Introduction from '../components/Introduction';
import Gallery from '../components/Gallery';
import Development from '../components/Development';

const ProjectPg = ({ data }) => {
  const frontRef = useRef();
  const animTl = useRef();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    // To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    animTl.current = gsap.timeline({ paused: true }).to(frontRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power2.easeInOut',
    });

    window.scrollTo(0, 0);
    animTl.current.play();
  }, []);

  const onClickHandler = () => {
    animTl.current.reverse(0.6);
    setTimeout(() => {
      window.history.back();
    }, 300);
  };

  return (
    <main className="projectPg">
      <button onClick={onClickHandler} className="close">
        <ion-icon name="close-outline" className="close__icon"></ion-icon>
      </button>
      <div className="back"></div>
      <div ref={frontRef} className="front">
        <Introduction data={data} />
        <Gallery title="Screenshots" images={data.screenshots} />
        <Gallery title="Design" images={data.design} />
        <Development general={data.general} />
      </div>
    </main>
  );
};

export default ProjectPg;
