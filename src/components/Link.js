import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // To let browser open in new tab when ctrl or cmd key is pressed
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, '', href);

    // To communicate to the Routes components that the url has just changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
