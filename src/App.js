// import React from 'react';
import './scss/main.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import Mission from './components/Mission';
import Projects from './components/Projects';
import Competencies from './components/Competencies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPg from './components/ProjectPg';

import { projectsData } from './json/data.js';

const App = () => {
  return (
    <div>
      <ProjectPg projectData={projectsData[0]} />
      {/* <Header />
      <Intro />
      <Mission />
      <Projects />
      <Competencies />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
