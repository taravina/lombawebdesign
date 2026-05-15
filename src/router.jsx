import React, { useState, useEffect, createContext, useContext } from 'react';

// This is a simple mock router to replace react-router-dom 
// since the dependency is missing in the environment.
const RouterContext = createContext();

export const BrowserRouter = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ path, setPath }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Routes = ({ children }) => {
  const { path } = useContext(RouterContext);
  let match = null;
  
  // Basic route matching
  React.Children.forEach(children, (child) => {
    if (!match && child.props.path === path) {
      match = child.props.element;
    }
  });

  // Default to first route if no match (usually home)
  if (!match && children.length > 0) {
    match = children[0].props.element;
  }

  return match;
};

export const Route = ({ path, element }) => null;

export const Link = ({ to, children, ...props }) => {
  const { setPath } = useContext(RouterContext);
  
  const handleClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
      setPath(to);
      window.scrollTo(0, 0);
    }
  };

  return <a href={to} onClick={handleClick} {...props}>{children}</a>;
};

export const useLocation = () => {
  const context = useContext(RouterContext);
  return { pathname: context ? context.path : window.location.pathname };
};
