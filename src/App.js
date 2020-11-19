import PropTypes from 'prop-types';
import { useEffect, createContext, useState } from 'react';

export const LayoutContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const onUpdateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setIsMobile(window.innerWidth < 992);
  };

  useEffect(() => {
    onUpdateWindowDimensions();
    window.addEventListener('resize', onUpdateWindowDimensions);
    return () => window.removeEventListener('resize', onUpdateWindowDimensions);
  }, []);

  return (
    <LayoutContext.Provider value={{ height, width, isMobile }}>
      <Component {...pageProps} />
    </LayoutContext.Provider>
  );
}

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
};
