import Header from './Header';
import Introduction from './Introduction';
import Contact from './Contact';
import Footer from './Footer';

const ProjectPg = ({ projectData }) => {
  return (
    <div>
      <Header />
      <Introduction projectData={projectData} />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectPg;
