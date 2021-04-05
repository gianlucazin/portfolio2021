import './scss/main.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import { projectsData } from './data/data.js';
import Loader from 'react-loader-spinner';
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
  let transitionTl = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);

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
