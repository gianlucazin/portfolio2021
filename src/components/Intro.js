import React from 'react';
import { useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Scroll from './Scroll';

gsap.registerPlugin(ScrollToPlugin);

const Intro = React.forwardRef((props, ref) => {
  let svgRef = useRef();
  let giRef = useRef();
  let zetaRef = useRef();
  let leftRef = useRef();
  let rightRef = useRef();
  let centreRef = useRef();
  let restRef = useRef();
  let nameRef = useRef();
  let roleRef = useRef();
  let navRef = useRef();
  let scrollRef = useRef();
  let tlRef = useRef();

  const onClickHandler = (e) => {
    e.preventDefault();
    const target = e.target.hash;
    gsap.to(window, { scrollTo: target, duration: 1, autoKill: true });
  };

  useEffect(() => {
    tlRef.current = gsap
      .timeline({ paused: true })
      .set(svgRef.current, { y: 100 })
      .set(
        [
          centreRef.current,
          restRef.current,
          nameRef.current,
          roleRef.current,
          navRef.current,
          scrollRef.current,
        ],
        {
          visibility: 'hidden',
        }
      )
      .set(giRef.current, { fill: 'transparent' })
      .set(zetaRef.current, { fill: 'transparent' })

      .set(leftRef.current, { x: '-6rem', visibility: 'hidden' })
      .set(rightRef.current, { x: '6rem', visibility: 'hidden' });

    tlRef.current
      .to([giRef.current, zetaRef.current], {
        strokeDashoffset: 0,
        duration: 2,
      })
      .to([giRef.current, zetaRef.current], { fill: '#fff' }, '-=0.5')
      .to([giRef.current, zetaRef.current], { strokeWidth: '0px' }, '<')
      .to(svgRef.current, { y: 0 })
      .to([leftRef.current, rightRef.current], { x: 0, autoAlpha: 1 })
      .to(
        [centreRef.current, restRef.current],
        {
          autoAlpha: 1,
        },
        '<'
      )
      .fromTo(
        [nameRef.current, roleRef.current, navRef.current, scrollRef.current],
        { y: 30 },
        { autoAlpha: 1, y: 0, stagger: 0.2 },
        '-=0.25'
      )
      .to(['.social', '.burger'], { autoAlpha: 1 }, '<');
    tlRef.current.play();
  }, []);

  return (
    <section className="intro">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 410.55 223.14"
        className="intro__logo"
      >
        <defs>
          <style></style>
          <linearGradient
            id="linear-gradient"
            x1="-210.39"
            y1="-458.78"
            x2="-222.33"
            y2="-446.85"
            gradientTransform="matrix(0.91, 0.71, -0.91, 0.71, -8.51, 581.84)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ececec" />
            <stop offset="1" stopColor="#c6c6c5" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="-103.2"
            y1="-335.84"
            x2="-148.14"
            y2="-290.9"
            gradientTransform="matrix(0.91, -0.71, -0.91, -0.71, 138.89, -234.86)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#6c03f6" />
            <stop offset="1" stopColor="#da29b7" />
          </linearGradient>
          <linearGradient
            id="New_Gradient_Swatch_copy_3"
            data-name="New Gradient Swatch copy 3"
            x1="1091.57"
            y1="-526.32"
            x2="1046.63"
            y2="-481.38"
            gradientTransform="matrix(0.91, -0.71, -0.91, -0.71, -1116.08, 540.07)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f15a60" />
            <stop offset="1" stopColor="#fe6ec2" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="1485.51"
            y1="-262.92"
            x2="1486.5"
            y2="-242.89"
            gradientTransform="matrix(0.91, -0.71, -0.91, -0.71, -1249.49, 975.11)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.25" stopColor="#fe6ec2" />
            <stop offset="1" stopColor="#f15a60" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-4"
            x1="58.78"
            y1="140.38"
            x2="156.79"
            y2="140.38"
            gradientTransform="translate(283.26 163.43) rotate(135)"
            xlinkHref="#linear-gradient-2"
          />
          <linearGradient
            id="New_Gradient_Swatch_copy_3-2"
            x1="151.74"
            y1="31.63"
            x2="63.83"
            y2="119.55"
            gradientTransform="translate(85.02 -54.08) rotate(45)"
            xlinkHref="#New_Gradient_Swatch_copy_3"
          />
          <linearGradient
            id="New_Gradient_Swatch_copy_3-3"
            x1="59.08"
            y1="108.05"
            x2="92.25"
            y2="108.05"
            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
            xlinkHref="#New_Gradient_Swatch_copy_3"
          />
        </defs>

        <g id="centre" ref={centreRef}>
          <rect
            className="cls-2"
            x="187.85"
            y="92.08"
            width="33.17"
            height="33.17"
            rx="16.58"
            transform="translate(-16.68 176.45) rotate(-45)"
          />
          <rect
            className="cls-3"
            x="187.85"
            y="91.94"
            width="33.17"
            height="33.17"
            rx="16.58"
            transform="translate(-16.58 176.41) rotate(-45)"
          />
        </g>
        <g id="rest" ref={restRef}>
          <rect
            className="cls-3"
            x="238.65"
            y="59.01"
            width="124.86"
            height="33.17"
            rx="16.58"
            transform="translate(141.91 -190.69) rotate(45)"
          />
          <rect
            className="cls-3"
            x="96.64"
            y="91.8"
            width="215.3"
            height="33.17"
            rx="16.58"
            transform="translate(272.39 329.54) rotate(-135)"
          />
        </g>
        <g id="zeta-dark">
          <path
            ref={zetaRef}
            className="cls-4 draw"
            d="M350.4,108a16.68,16.68,0,0,1-7,13.52l-62.84,62.83a16.58,16.58,0,0,1-23.45-23.45l36.31-36.32h-89a16.22,16.22,0,0,1-2.78-.24,5.67,5.67,0,0,1-.57-.1,16.15,16.15,0,0,1-2.44-.7c-.22-.08-.45-.17-.67-.27s-.49-.21-.73-.33a16.38,16.38,0,0,1-4.54-3.22l-3.22-4.54c-.12-.24-.23-.48-.33-.73s-.2-.48-.29-.72l-.27-.8c-.07-.23-.14-.46-.2-.69l0-.14c-.06-.25-.12-.51-.17-.76s-.09-.43-.12-.65l-.22-2.69a17,17,0,0,1,.23-2.76c0-.2.07-.39.11-.58q.1-.51.24-1c0-.19.11-.38.17-.57s.16-.52.26-.77.19-.51.3-.76.21-.49.33-.73a16.38,16.38,0,0,1,3.22-4.54l64.52-64.52a16.58,16.58,0,1,1,23.45,23.45L244.47,91.4h89.34A16.59,16.59,0,0,1,350.4,108Z"
            transform="translate(0.28 0.07)"
          />
        </g>
        <g id="gi-dark">
          <path
            ref={giRef}
            className="cls-4 draw"
            d="M221,108a16.18,16.18,0,0,1-.22,2.69c0,.22-.07.43-.12.65s-.11.51-.17.76c0,0,0,.09,0,.14-.06.23-.13.46-.2.69a12.81,12.81,0,0,1-.47,1.31,5,5,0,0,1-.23.53,14.77,14.77,0,0,1-1,2c-.11.18-.23.36-.35.54a15.56,15.56,0,0,1-2,2.45l-61.91,61.91a16.75,16.75,0,0,1-2.32,2.91,16.6,16.6,0,0,1-23.45,0L63.64,119.69a16.57,16.57,0,0,1,0-23.45c.25-.25.5-.48.76-.71l63.89-63.9a16.58,16.58,0,1,1,23.45,23.45L98.84,108l41.07,41.07,24.49-24.49H139.64a16.59,16.59,0,0,1,0-33.17h64.79a16.51,16.51,0,0,1,2.71.22c.21,0,.42.07.63.12s.64.14,1,.22l.63.19c.26.08.52.16.77.26l.55.21c.17.07.35.14.53.23a14.18,14.18,0,0,1,2,1l.54.35a16.52,16.52,0,0,1,2.45,2l2,2.45c.12.18.24.36.35.54l1,1.93a4.7,4.7,0,0,1,.25.57l.22.56c.09.24.17.49.25.75s.12.38.17.57l.24,1c0,.19.08.38.11.58Z"
            transform="translate(0.28 0.07)"
          />
        </g>
        <g id="right" ref={rightRef}>
          <rect
            className="cls-5"
            x="238.65"
            y="59.01"
            width="124.86"
            height="33.17"
            rx="16.58"
            transform="translate(141.91 -190.69) rotate(45)"
          />
          <rect
            className="cls-6"
            x="238.92"
            y="123.8"
            width="124.33"
            height="33.17"
            rx="16.58"
            transform="translate(613.53 26.81) rotate(135)"
          />
          <rect
            className="cls-7"
            x="316.36"
            y="91.94"
            width="33.17"
            height="33.17"
            rx="16.58"
            transform="translate(666.17 217.11) rotate(180)"
          />
        </g>
        <g id="left" ref={leftRef}>
          <rect
            className="cls-8"
            x="45.35"
            y="123.8"
            width="124.86"
            height="33.17"
            rx="16.58"
            transform="translate(85.01 315.93) rotate(-135)"
          />
          <rect
            className="cls-9"
            x="45.62"
            y="59.01"
            width="124.33"
            height="33.17"
            rx="16.58"
            transform="translate(-21.6 98.42) rotate(-45)"
          />
          <rect
            className="cls-10"
            x="59.08"
            y="91.47"
            width="33.17"
            height="33.17"
            rx="16.58"
          />
        </g>
      </svg>

      <h1 ref={nameRef} className="heading-primary">
        Gianluca Zin
      </h1>
      <p ref={roleRef} className="paragraph">
        Fullstack Developer & UI/UX Designer
      </p>
      <div ref={navRef} className="intro__nav">
        <HashLink
          onClick={onClickHandler}
          to="#about"
          className="intro__link heading-tertiary"
        >
          About
        </HashLink>
        <b className="intro__dividers">/</b>
        <HashLink
          onClick={onClickHandler}
          to="#projects"
          className="intro__link heading-tertiary"
        >
          Projects
        </HashLink>
        <b className="intro__dividers">/</b>
        <HashLink
          onClick={onClickHandler}
          to="#contact"
          className="intro__link heading-tertiary"
        >
          Contact
        </HashLink>
      </div>
      <Scroll scrref={scrollRef} />
    </section>
  );
});

export default Intro;
