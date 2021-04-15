import './scss/main.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import ReactGA from 'react-ga';
import { projectsData } from './data/data.js';
import Loader from 'react-loader-spinner';
import HomePg from './pages/HomePg';
import ProjectPg from './pages/ProjectPg';

const routes = [
  { path: '/', Component: HomePg, prop: projectsData },
  { path: '/passepartout', Component: ProjectPg, prop: projectsData[0] },
  { path: '/srtendaggi', Component: ProjectPg, prop: projectsData[1] },
  { path: '/hivenue', Component: ProjectPg, prop: projectsData[2] },
  { path: '/portfolio', Component: ProjectPg, prop: projectsData[3] },
  { path: '/blueneon', Component: ProjectPg, prop: projectsData[4] },
  { path: '/localrama', Component: ProjectPg, prop: projectsData[5] },
];

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      gsap.to('.loader svg', { autoAlpha: 0 });
    }, 1500);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    ReactGA.initialize('UA-194609669-1');
    // To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <>
        {loading ? (
          <div className="loader">
            <Loader
              type="Puff"
              color="#f25c68"
              height={100}
              width={100}
              timeout={2000}
            />
          </div>
        ) : (
          <>
            {routes.map(({ path, Component, prop }) => (
              <Route key={path} exact path={path}>
                <Component data={prop} />
              </Route>
            ))}
          </>
        )}
      </>
    </Router>
  );
};

export default App;
