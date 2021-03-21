// import React from 'react';
import './scss/main.scss';
import { projectsData } from './data/data.js';
import HomePg from './pages/HomePg';
import ProjectPg from './pages/ProjectPg';
import Route from './components/Route';

const App = () => {
  return (
    <div>
      <Route path="/">
        <HomePg />
      </Route>
      <Route path="/passepartout">
        <ProjectPg projectData={projectsData[0]} />
      </Route>
      <Route path="/srtendaggi">
        <ProjectPg projectData={projectsData[1]} />
      </Route>
      <Route path="/hivenue">
        <ProjectPg projectData={projectsData[2]} />
      </Route>
    </div>
  );
};

export default App;
