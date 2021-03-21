import React from 'react';
import Header from '../layout/Header';
import Intro from '../components/Intro';
import Mission from '../components/Mission';
import Projects from '../components/Projects';
import Competencies from '../components/Competencies';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../layout/Footer';

const HomePg = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Mission />
      <Projects />
      <Competencies />
      <About />
      {/* <Contact /> */}
      <Footer />
    </React.Fragment>
  );
};

export default HomePg;
