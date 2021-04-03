import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Scroll = ({ scrref }) => {
  const mouseRef = useRef();
  const wheelRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        repeat: -1,
      },
    });
    tl.from(mouseRef.current, {
      y: -10,
      opacity: 0.6,
      yoyo: true,
      duration: 0.6,
      ease: 'power1.in',
    }).to(
      wheelRef.current,
      { y: 13, opacity: 0, duration: 1.2, ease: 'power1.inOut' },
      0
    );
  }, []);

  return (
    <div ref={scrref} className="scroll">
      <div ref={mouseRef} className="scroll__mouse">
        <div ref={wheelRef} className="scroll__wheel"></div>
      </div>
      <p className="label">Scroll Down</p>
    </div>
  );
};

export default Scroll;
