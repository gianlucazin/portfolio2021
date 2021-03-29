import Header from '../layout/Header';
import Introduction from '../components/Introduction';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../layout/Footer';
import Development from '../components/Development';

const ProjectPg = ({ projectData }) => {
  return (
    <div>
      <Header />
      <Introduction projectData={projectData} />
      <Gallery title="Screenshots" images={projectData.screenshots} />
      <Gallery title="Design" images={projectData.design} />
      <Development />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectPg;
