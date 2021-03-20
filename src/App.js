// import React from 'react';
import './scss/main.scss';
import { projectsData } from './data/data.js';
import HomePg from './pages/HomePg';
import ProjectPg from './pages/ProjectPg';
import Route from './components/Route';

const showHomePg = () => {
  if (window.location.pathname === '/') return <HomePg />;
};

const showProjectPg = () => {
  if (window.location.pathname === '/passepartout')
    return <ProjectPg projectData={projectsData[0]} />;
  if (window.location.pathname === '/srtendaggi')
    return <ProjectPg projectData={projectsData[1]} />;
  if (window.location.pathname === '/hivenue')
    return <ProjectPg projectData={projectsData[2]} />;
};

const App = () => {
  return (
    <div>
      <Route path="/">
        <HomePg />
      </Route>
      <Route path="/passepartout">
        <ProjectPg projectData={projectsData[0]} />
      </Route>
    </div>
  );
};

export default App;
