import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Introduction from '../components/Introduction';
import Gallery from '../components/Gallery';
import Development from '../components/Development';

const ProjectPg = ({ data }) => {
  const frontRef = useRef();
  const animTl = useRef();

  useEffect(() => {
    animTl.current = gsap.timeline({ paused: true }).from(frontRef.current, {
      opacity: 0,
      scale: 0.7,
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
      <div className="back"></div>
      <div ref={frontRef} className="front">
        <button onClick={onClickHandler} className="close">
          <ion-icon name="close-outline" className="close__icon"></ion-icon>
        </button>
        <Introduction data={data} />
        <Gallery title="Screenshots" images={data.screenshots} />
        <Gallery title="Design" images={data.design} />
        <Development />
      </div>
    </main>
  );
};

export default ProjectPg;
