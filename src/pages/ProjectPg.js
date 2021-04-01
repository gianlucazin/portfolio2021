import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Introduction from '../components/Introduction';
import Gallery from '../components/Gallery';
import Development from '../components/Development';

const ProjectPg = ({ data }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      setTimeout(function () {
        window.scrollTo(0, 0);
      }, 800);
    }
  }, [pathname]);

  return (
    <div>
      <Introduction data={data} />
      <Gallery title="Screenshots" images={data.screenshots} />
      <Gallery title="Design" images={data.design} />
      <Development />
    </div>
  );
};

export default ProjectPg;
