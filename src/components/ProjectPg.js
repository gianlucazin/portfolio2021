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
      <Introduction projectData={projectData.overview} />
      <Gallery title="Screenshots" images={projectData.screenshots} />
      <Gallery title="Design" images={projectData.design} />
      <Development />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectPg;
