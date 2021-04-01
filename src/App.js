import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import { projectsData } from './data/data.js';
import Header from './layout/Header';
import Contact from './components/Contact';
import Footer from './layout/Footer';
import HomePg from './pages/HomePg';
import ProjectPg from './pages/ProjectPg';
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
  const onEnter = (node) => {
    //
    console.log(node);
  };
  const onExit = (node) => {
    //
    console.log(node);
  };

  return (
    <Router>
      <>
        <Header />
        {routes.map(({ path, Component, prop }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component data={prop} />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        {/* <Contact /> */}
        <Footer />
      </>
    </Router>
  );
};

export default App;
