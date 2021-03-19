import Header from './Header';
import Introduction from './Introduction';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import Development from './Development';

const ProjectPg = ({ projectData }) => {
  return (
    <div>
      <Header />
      <Introduction projectData={projectData} />
      <Gallery title="Screenshots" />
      <Gallery title="Design" />
      <Development />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectPg;
