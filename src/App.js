import './scss/main.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap, Back } from 'gsap';
import { projectsData } from './data/data.js';
import Loader from 'react-loader-spinner';
import Navigation from './layout/Navigation';
import Burger from './components/Burger';
import Header from './layout/Header';
import Contact from './components/Contact';
import Footer from './layout/Footer';
import HomePg from './pages/HomePg';
import ProjectPg from './pages/ProjectPg';
import TransitionPg from './components/TransitionPg';
import Test from './components/Test';

const routes = [
  { path: '/', Component: HomePg, prop: projectsData },
  { path: '/passepartout', Component: ProjectPg, prop: projectsData[0] },
  { path: '/srtendaggi', Component: ProjectPg, prop: projectsData[1] },
  { path: '/hivenue', Component: ProjectPg, prop: projectsData[2] },
  { path: '/portfolio', Component: ProjectPg, prop: projectsData[3] },
  { path: '/blueneon', Component: ProjectPg, prop: projectsData[4] },
  { path: '/localrama', Component: ProjectPg, prop: projectsData[5] },
  { path: '/test', Component: Test },
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  let transitionTl = useRef();
  let menuTl = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // Open menu animation
      menuTl.current = gsap
        .timeline({
          defaults: { duration: 1.5, ease: Back.easeOut.config(2) },
          paused: true,
          reversed: true,
        })
        // .set('.header', { mixBlendMode: 'unset' })
        .set('.menu-icon span', { backgroundColor: 'black' })
        .to('.navigation__overlay', { autoAlpha: 1 })
        .to('.navigation__nav', { x: '10rem' }, 0)
        .to(
          '.navigation__item',
          { opacity: 1, x: '0', delay: 0.1, stagger: 0.1 },
          0
        );

      transitionTl.current = gsap
        .timeline({ paused: true })
        .to('ul.transitionPg li', {
          scaleY: 1,
          transformOrigin: 'bottom left',
          stagger: {
            amount: 0.4,
          },
        })
        .to('ul.transitionPg li', {
          scaleY: 0,
          transformOrigin: 'bottom left',
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
        });
    }, 2000);
  }, []);

  const onClickMenuHandler = () => {
    !menuOpen ? menuTl.current.play() : menuTl.current.reverse(0.7);
    setMenuOpen(!menuOpen);
  };

  const onEnter = () => transitionTl.current.play();
  const onExit = () => transitionTl.current.restart();

  return (
    <Router>
      <div>
        {loading ? (
          <div className="loader">
            <Loader
              type="Puff"
              color="#f25c68"
              height={100}
              width={100}
              timeout={2000} //3 secs
            />
          </div>
        ) : (
          <>
            <Burger onClickMenuHandler={onClickMenuHandler} />
            <Navigation
              menuOpen={menuOpen}
              onClickMenuHandler={onClickMenuHandler}
            />
            <Header />
            <TransitionPg />
            {routes.map(({ path, Component, prop }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={{
                      enter: 2000,
                      exit: 1000,
                    }}
                    unmountOnExit
                    classNames="page"
                    onEnter={onEnter}
                    onExit={onExit}
                  >
                    <Component data={prop} />
                  </CSSTransition>
                )}
              </Route>
            ))}
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
