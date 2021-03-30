// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/main.scss';
import { projectsData } from './data/data.js';
import HomePg from './pages/HomePg';
import ProjectPg from './pages/ProjectPg';
// import Route from './components/Route';

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
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePg projectsData={projectsData} />
          </Route>
          {routes}
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
