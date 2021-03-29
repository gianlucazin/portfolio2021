// import React from 'react';
import './scss/main.scss';
import { projectsData } from './data/data.js';
import HomePg from './pages/HomePg';
import ProjectPg from './pages/ProjectPg';
import Route from './components/Route';

import Test from './components/Test';

const routes = projectsData.map((projectData) => {
  return (
    <Route key={projectData.general.url} path={`/${projectData.general.url}`}>
      <ProjectPg projectData={projectData} />
    </Route>
  );
});

const App = () => {
  return (
    <div>
      <Route path="/">
        <HomePg projectsData={projectsData} />
      </Route>
      {routes}
      <Route path="/test">
        <Test />
      </Route>
    </div>
  );
};

export default App;
