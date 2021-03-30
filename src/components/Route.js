import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const Route = ({ path, children }) => {
  // It's needed just to have our route to updates
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = (event) => {
      setCurrentPath(window.location.pathname);
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        gsap.to(window, { scrollTo: target, duration: 1 });
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
